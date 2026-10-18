/* Pure simulation model. All numbers are frozen when the studio is opened. */
(function (root) {
  'use strict';
  const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
  function summarize(votes) {
    const total = Object.values(votes).reduce((a, b) => a + b, 0);
    const percentages = Object.fromEntries(Object.entries(votes).map(([id, n]) => [id, total ? n / total * 100 : 0]));
    const sorted = Object.entries(percentages).sort((a, b) => b[1] - a[1]);
    return { votes, total, percentages, sorted, winner: total ? sorted[0]?.[0] : null };
  }
  function survey(percentages, random = Math.random) {
    const ids = Object.keys(percentages);
    const base = ids.map(id => percentages[id]);
    if (!base.some(p => p > 0)) return { exitPoll: { ...percentages }, latePoll: { ...percentages } };
    // Project random errors onto a bounded simplex: no negative support,
    // no votes for inactive candidates, and a total of exactly 100%.
    // The 0.01 p.p. reserve keeps the displayed rounding inside ±3 p.p.
    const lower = base.map(p => Math.max(0, p - 2.99));
    const upper = base.map(p => p > 0 ? Math.min(100, p + 2.99) : 0);
    const raw = base.map(p => p > 0 ? p + (random() * 2 - 1) * 2.99 : 0);
    let lo = -100, hi = 100;
    for (let iteration = 0; iteration < 64; iteration++) {
      const offset = (lo + hi) / 2;
      const sum = raw.reduce((total, p, i) => total + clamp(p - offset, lower[i], upper[i]), 0);
      if (sum > 100) lo = offset; else hi = offset;
    }
    const estimate = raw.map((p, i) => clamp(p - (lo + hi) / 2, lower[i], upper[i]));
    function rounded(values) {
      const cents = values.map(p => Math.floor(p * 100));
      const remaining = 10000 - cents.reduce((sum, n) => sum + n, 0);
      const order = ids.map((_, i) => i).filter(i => base[i] > 0)
        .sort((a, b) => (values[b] * 100 - cents[b]) - (values[a] * 100 - cents[a]));
      for (let i = 0; i < remaining; i++) cents[order[i % order.length]]++;
      return Object.fromEntries(ids.map((id, i) => [id, cents[i] / 100]));
    }
    const exitPoll = rounded(estimate);
    // A single correlated correction towards the truth keeps late poll closer
    // to the final result, with errors below ±1 p.p., including rounding.
    const remainingError = .2 + random() * .1;
    const latePoll = rounded(base.map((p, i) => p + (exitPoll[ids[i]] - p) * remainingError));
    return { exitPoll, latePoll };
  }

  const DEMOGRAPHIC_PROFILES = {
    jobs: [
      {
        name: 'Przedsiębiorca', weight: 0.11,
        poles: [{ aborcja: 3.8, lgbt: 4.2, gospodarka: 9.0, kosmopolityzmNacjonalizm: 4.5, ue: 6.6, rosja: 1.5, usa: 6.8 }],
        axisWeights: { aborcja: 0.8, lgbt: 0.8, gospodarka: 2.8, kosmopolityzmNacjonalizm: 1.0, ue: 1.1, rosja: 1.0, usa: 0.8 },
        sharpness: 2.45, tradWeight: 0.38, netWeight: 0.62, mediaGamma: 0.36,
        modifier(p) {
          let m = 1 + (p.gospodarka - 5) * 0.12;
          if (p.gospodarka <= 4.0) m *= 0.46;
          if (p.rosja > 5.5) m *= 0.78;
          return clamp(m, 0.22, 1.90);
        }
      },
      {
        name: 'Menedżer/dyrektor/specjalista', weight: 0.16,
        poles: [{ aborcja: 2.2, lgbt: 2.3, gospodarka: 6.3, kosmopolityzmNacjonalizm: 2.3, ue: 8.7, rosja: 1.0, usa: 7.4 }],
        axisWeights: { aborcja: 1.4, lgbt: 1.4, gospodarka: 1.2, kosmopolityzmNacjonalizm: 1.8, ue: 2.0, rosja: 1.3, usa: 1.0 },
        sharpness: 2.4, tradWeight: 0.46, netWeight: 0.54, mediaGamma: 0.40,
        modifier(p) {
          let m = 1 + (p.ue - 5) * 0.055 + (p.zaufanie - 35) * 0.005 - (p.niepopularnosc - 35) * 0.004;
          if (p.kosmopolityzmNacjonalizm > 7.5) m *= 0.65;
          if (p.rosja > 4.5) m *= 0.62;
          return clamp(m, 0.30, 1.75);
        }
      },
      {
        name: 'Rolnik', weight: 0.07,
        poles: [{ aborcja: 8.5, lgbt: 8.7, gospodarka: 3.7, kosmopolityzmNacjonalizm: 8.3, ue: 3.3, rosja: 2.4, usa: 7.0 }],
        axisWeights: { aborcja: 1.7, lgbt: 1.8, gospodarka: 1.3, kosmopolityzmNacjonalizm: 1.9, ue: 1.5, rosja: 0.9, usa: 0.9 },
        sharpness: 2.5, tradWeight: 0.76, netWeight: 0.24, mediaGamma: 0.48,
        modifier(p) {
          const tradVal = (p.aborcja + p.lgbt) / 2;
          let m = 1 + (tradVal - 5) * 0.075 + (p.kosmopolityzmNacjonalizm - 5) * 0.05;
          if (tradVal < 3.2) m *= 0.48;
          if (p.gospodarka > 7.8) m *= 0.78;
          return clamp(m, 0.25, 1.85);
        }
      },
      {
        name: 'Pracownik', weight: 0.30,
        poles: [{ aborcja: 5.2, lgbt: 5.4, gospodarka: 4.4, kosmopolityzmNacjonalizm: 5.5, ue: 5.7, rosja: 2.0, usa: 6.8 }],
        axisWeights: { aborcja: 1.1, lgbt: 1.1, gospodarka: 1.4, kosmopolityzmNacjonalizm: 1.2, ue: 1.1, rosja: 1.1, usa: 0.9 },
        sharpness: 1.75, tradWeight: 0.55, netWeight: 0.45, mediaGamma: 0.42,
        modifier(p) {
          let m = 1 + (p.zaufanie - 35) * 0.003 - Math.max(0, p.gospodarka - 7.8) * 0.05;
          if (p.rosja > 5.5) m *= 0.80;
          return clamp(m, 0.45, 1.50);
        }
      },
      {
        name: 'Student/Uczeń', weight: 0.07,
        poles: [
          { aborcja: 1.2, lgbt: 1.1, gospodarka: 3.5, kosmopolityzmNacjonalizm: 1.8, ue: 8.6, rosja: 1.4, usa: 5.5 },
          { aborcja: 6.8, lgbt: 6.8, gospodarka: 8.9, kosmopolityzmNacjonalizm: 7.4, ue: 3.2, rosja: 3.5, usa: 6.2 }
        ],
        axisWeights: { aborcja: 1.6, lgbt: 1.7, gospodarka: 1.5, kosmopolityzmNacjonalizm: 1.4, ue: 1.3, rosja: 0.7, usa: 0.6 },
        sharpness: 2.5, tradWeight: 0.12, netWeight: 0.88, mediaGamma: 0.64,
        modifier(p) {
          let m = 1 + (p.net - p.trad) * 0.006;
          // Traditional social-statist party lines lose heavily among students/pupils
          if (p.aborcja > 6.0 && p.gospodarka < 4.5) m *= 0.34;
          if (p.aborcja <= 2.2 && p.lgbt <= 2.2) m *= 1.42;
          else if (p.gospodarka >= 7.8) m *= 1.28;
          return clamp(m, 0.20, 2.10);
        }
      },
      {
        name: 'Bezrobotny', weight: 0.04,
        poles: [
          { aborcja: 6.2, lgbt: 6.5, gospodarka: 3.0, kosmopolityzmNacjonalizm: 7.0, ue: 4.2, rosja: 2.8, usa: 6.0 },
          { aborcja: 6.5, lgbt: 6.8, gospodarka: 6.8, kosmopolityzmNacjonalizm: 7.8, ue: 2.8, rosja: 3.8, usa: 5.5 }
        ],
        axisWeights: { aborcja: 1.0, lgbt: 1.0, gospodarka: 1.5, kosmopolityzmNacjonalizm: 1.5, ue: 1.3, rosja: 0.8, usa: 0.7 },
        sharpness: 1.9, tradWeight: 0.52, netWeight: 0.48, mediaGamma: 0.36,
        modifier(p) {
          let m = 1 + (5 - p.ue) * 0.04 + (p.kosmopolityzmNacjonalizm - 5) * 0.035;
          if (p.gospodarka > 5.5 && p.ue > 7.5) m *= 0.76;
          return clamp(m, 0.40, 1.65);
        }
      },
      {
        name: 'Emeryt/Rencista', weight: 0.25,
        poles: [
          { aborcja: 8.2, lgbt: 8.4, gospodarka: 2.7, kosmopolityzmNacjonalizm: 7.8, ue: 4.2, rosja: 1.2, usa: 8.0 },
          { aborcja: 3.6, lgbt: 3.8, gospodarka: 4.8, kosmopolityzmNacjonalizm: 3.4, ue: 8.3, rosja: 1.0, usa: 7.8 }
        ],
        axisWeights: { aborcja: 1.3, lgbt: 1.3, gospodarka: 1.8, kosmopolityzmNacjonalizm: 1.4, ue: 1.4, rosja: 1.6, usa: 1.2 },
        sharpness: 2.3, tradWeight: 0.88, netWeight: 0.12, mediaGamma: 0.70,
        modifier(p) {
          let m = 1 + (p.trad - p.net) * 0.0045 + (p.zaufanie - 35) * 0.005;
          // Strong aversion to dismantling social state, internet-only radicalism, or pro-Russian views
          if (p.gospodarka > 7.2) m *= 0.42;
          if (p.rosja > 3.8) m *= 0.48;
          if (p.trad < 45) m *= 0.62;
          if (p.aborcja < 1.8 && p.gospodarka < 2.8) m *= 0.55;
          return clamp(m, 0.18, 1.85);
        }
      }
    ],
    ages: [
      {
        name: '18–29', weight: 0.14,
        poles: [
          { aborcja: 1.3, lgbt: 1.2, gospodarka: 3.8, kosmopolityzmNacjonalizm: 1.9, ue: 8.5, rosja: 1.5, usa: 5.8 },
          { aborcja: 6.8, lgbt: 6.8, gospodarka: 8.8, kosmopolityzmNacjonalizm: 7.3, ue: 3.3, rosja: 3.4, usa: 6.2 }
        ],
        axisWeights: { aborcja: 1.6, lgbt: 1.6, gospodarka: 1.6, kosmopolityzmNacjonalizm: 1.4, ue: 1.3, rosja: 0.7, usa: 0.6 },
        sharpness: 2.45, tradWeight: 0.15, netWeight: 0.85, mediaGamma: 0.62,
        modifier(p) {
          let m = 1 + (p.net - p.trad) * 0.0055;
          if (p.aborcja > 6.0 && p.gospodarka < 4.5) m *= 0.36;
          if (p.aborcja <= 2.2 && p.lgbt <= 2.2) m *= 1.36;
          else if (p.gospodarka >= 7.8) m *= 1.25;
          return clamp(m, 0.22, 2.00);
        }
      },
      {
        name: '30–39', weight: 0.19,
        poles: [
          { aborcja: 2.8, lgbt: 3.0, gospodarka: 6.2, kosmopolityzmNacjonalizm: 3.2, ue: 7.8, rosja: 1.4, usa: 7.0 },
          { aborcja: 6.2, lgbt: 6.2, gospodarka: 8.2, kosmopolityzmNacjonalizm: 6.6, ue: 4.2, rosja: 2.8, usa: 6.5 }
        ],
        axisWeights: { aborcja: 1.2, lgbt: 1.2, gospodarka: 1.7, kosmopolityzmNacjonalizm: 1.2, ue: 1.2, rosja: 0.9, usa: 0.8 },
        sharpness: 2.0, tradWeight: 0.34, netWeight: 0.66, mediaGamma: 0.46,
        modifier(p) {
          let m = 1 + (p.gospodarka - 5) * 0.045;
          if (p.aborcja > 6.8 && p.gospodarka < 4.2) m *= 0.68;
          return clamp(m, 0.40, 1.65);
        }
      },
      {
        name: '40–49', weight: 0.20,
        poles: [{ aborcja: 4.0, lgbt: 4.2, gospodarka: 5.6, kosmopolityzmNacjonalizm: 4.3, ue: 6.9, rosja: 1.3, usa: 7.3 }],
        axisWeights: { aborcja: 1.2, lgbt: 1.2, gospodarka: 1.3, kosmopolityzmNacjonalizm: 1.3, ue: 1.4, rosja: 1.2, usa: 1.0 },
        sharpness: 1.9, tradWeight: 0.54, netWeight: 0.46, mediaGamma: 0.42,
        modifier(p) {
          let m = 1 + (p.zaufanie - 35) * 0.004 - (p.niepopularnosc - 35) * 0.003;
          if (p.rosja > 4.5) m *= 0.72;
          return clamp(m, 0.45, 1.55);
        }
      },
      {
        name: '50–59', weight: 0.17,
        poles: [{ aborcja: 5.8, lgbt: 6.0, gospodarka: 4.3, kosmopolityzmNacjonalizm: 5.8, ue: 5.8, rosja: 1.4, usa: 7.5 }],
        axisWeights: { aborcja: 1.2, lgbt: 1.2, gospodarka: 1.3, kosmopolityzmNacjonalizm: 1.3, ue: 1.2, rosja: 1.3, usa: 1.1 },
        sharpness: 1.95, tradWeight: 0.72, netWeight: 0.28, mediaGamma: 0.50,
        modifier(p) {
          let m = 1 + (p.trad - 50) * 0.003;
          if (p.gospodarka > 7.8) m *= 0.68;
          if (p.rosja > 4.2) m *= 0.68;
          return clamp(m, 0.35, 1.60);
        }
      },
      {
        name: '60+', weight: 0.30,
        poles: [
          { aborcja: 8.1, lgbt: 8.3, gospodarka: 2.8, kosmopolityzmNacjonalizm: 7.7, ue: 4.3, rosja: 1.2, usa: 8.0 },
          { aborcja: 3.7, lgbt: 3.9, gospodarka: 4.9, kosmopolityzmNacjonalizm: 3.5, ue: 8.2, rosja: 1.0, usa: 7.8 }
        ],
        axisWeights: { aborcja: 1.3, lgbt: 1.3, gospodarka: 1.8, kosmopolityzmNacjonalizm: 1.4, ue: 1.4, rosja: 1.6, usa: 1.2 },
        sharpness: 2.25, tradWeight: 0.86, netWeight: 0.14, mediaGamma: 0.66,
        modifier(p) {
          let m = 1 + (p.trad - p.net) * 0.004 + (p.zaufanie - 35) * 0.005;
          if (p.gospodarka > 7.2) m *= 0.44;
          if (p.rosja > 3.8) m *= 0.50;
          if (p.trad < 45) m *= 0.64;
          if (p.aborcja < 1.8 && p.gospodarka < 2.8) m *= 0.58;
          return clamp(m, 0.20, 1.80);
        }
      }
    ],
    genders: [
      {
        name: 'Mężczyzna', weight: 0.48,
        poles: [{ aborcja: 5.6, lgbt: 5.9, gospodarka: 6.5, kosmopolityzmNacjonalizm: 5.9, ue: 5.3, rosja: 2.4, usa: 6.8 }],
        axisWeights: { aborcja: 0.9, lgbt: 1.0, gospodarka: 1.8, kosmopolityzmNacjonalizm: 1.4, ue: 1.1, rosja: 0.8, usa: 1.0 },
        sharpness: 1.85, tradWeight: 0.46, netWeight: 0.54, mediaGamma: 0.36,
        modifier(p) {
          let m = 1 + (p.gospodarka - 5) * 0.055 + (p.kosmopolityzmNacjonalizm - 5) * 0.03;
          if (p.gospodarka > 7.5) m *= 1.18;
          return clamp(m, 0.45, 1.65);
        }
      },
      {
        name: 'Kobieta', weight: 0.52,
        poles: [{ aborcja: 3.2, lgbt: 3.3, gospodarka: 4.4, kosmopolityzmNacjonalizm: 3.9, ue: 6.9, rosja: 1.2, usa: 7.2 }],
        axisWeights: { aborcja: 1.9, lgbt: 1.6, gospodarka: 1.2, kosmopolityzmNacjonalizm: 1.4, ue: 1.4, rosja: 1.4, usa: 1.0 },
        sharpness: 1.95, tradWeight: 0.54, netWeight: 0.46, mediaGamma: 0.38,
        modifier(p) {
          let m = 1 + (5 - p.aborcja) * 0.055 + (p.zaufanie - 35) * 0.004 - (p.niepopularnosc - 35) * 0.004;
          if (p.aborcja > 7.5 && p.gospodarka > 6.8) m *= 0.56;
          if (p.kosmopolityzmNacjonalizm > 8.2 || p.rosja > 4.5) m *= 0.62;
          return clamp(m, 0.35, 1.65);
        }
      }
    ]
  };

  function candidateAffinity(cand, group) {
    const p = {
      aborcja: 5, lgbt: 5, gospodarka: 5, kosmopolityzmNacjonalizm: 5,
      ue: 5, rosja: 5, usa: 5, trad: 50, net: 50, niepopularnosc: 35, zaufanie: 35,
      ...(cand.profile || {})
    };
    const axes = ['aborcja', 'lgbt', 'gospodarka', 'kosmopolityzmNacjonalizm', 'ue', 'rosja', 'usa'];
    const totalW = axes.reduce((s, k) => s + (group.axisWeights[k] || 1), 0);
    let minDistSq = Infinity;
    for (const pole of group.poles) {
      let dSq = 0;
      for (const k of axes) {
        const w = group.axisWeights[k] || 1;
        const diff = ((p[k] ?? 5) - (pole[k] ?? 5)) / 10;
        dSq += w * diff * diff;
      }
      minDistSq = Math.min(minDistSq, dSq / totalW);
    }
    const ideoFactor = Math.exp(-group.sharpness * minDistSq);
    const mediaReach = clamp((group.tradWeight * (p.trad ?? 50) + group.netWeight * (p.net ?? 50)) / 100, 0.08, 1);
    const mediaFactor = Math.pow(mediaReach, group.mediaGamma || 0.4);
    const socialFactor = group.modifier ? group.modifier(p) : 1;
    return Math.max(0.04, ideoFactor * mediaFactor * socialFactor);
  }

  function roundGroupShares(ids, values, activeMask) {
    const cents = values.map(p => Math.floor(p * 100));
    const remaining = 10000 - cents.reduce((sum, n) => sum + n, 0);
    const order = ids.map((_, i) => i).filter(i => activeMask[i])
      .sort((a, b) => (values[b] * 100 - cents[b]) - (values[a] * 100 - cents[a]));
    if (order.length) {
      for (let i = 0; i < remaining; i++) cents[order[i % order.length]]++;
    }
    return Object.fromEntries(ids.map((id, i) => [id, cents[i] / 100]));
  }

  function demographics(candidates, exitPoll) {
    const ids = candidates.map(c => c.id);
    const base = ids.map(id => Math.max(0, Number(exitPoll[id]) || 0));
    const activeMask = base.map(p => p > 0);
    const result = {};
    for (const [category, groupDefs] of Object.entries(DEMOGRAPHIC_PROFILES)) {
      if (!activeMask.some(Boolean)) {
        result[category] = groupDefs.map(g => ({
          name: g.name,
          percentages: Object.fromEntries(ids.map(id => [id, 0]))
        }));
        continue;
      }
      // Initial matrix M[g][i] = exitPoll[c] * affinity(c, g)
      const matrix = groupDefs.map(g => candidates.map((c, i) => activeMask[i] ? base[i] * candidateAffinity(c, g) : 0));
      const weights = groupDefs.map(g => g.weight);
      const weightSum = weights.reduce((a, b) => a + b, 0) || 1;
      // Iterative Proportional Fitting (raking) so rows sum to 100% and weighted columns match exitPoll
      for (let iter = 0; iter < 8; iter++) {
        for (let g = 0; g < matrix.length; g++) {
          const rowSum = matrix[g].reduce((a, b) => a + b, 0);
          if (rowSum > 0) {
            for (let i = 0; i < ids.length; i++) matrix[g][i] = matrix[g][i] / rowSum * 100;
          }
        }
        for (let i = 0; i < ids.length; i++) {
          if (!activeMask[i]) continue;
          let colWeighted = 0;
          for (let g = 0; g < matrix.length; g++) colWeighted += (weights[g] / weightSum) * matrix[g][i];
          if (colWeighted > 0) {
            const scale = base[i] / colWeighted;
            for (let g = 0; g < matrix.length; g++) matrix[g][i] *= scale;
          }
        }
      }
      result[category] = groupDefs.map((g, gIdx) => {
        const rowSum = matrix[gIdx].reduce((a, b) => a + b, 0);
        const normalized = rowSum > 0 ? matrix[gIdx].map(v => v / rowSum * 100) : base;
        return {
          name: g.name,
          percentages: roundGroupShares(ids, normalized, activeMask)
        };
      });
    }
    return result;
  }

  function finalistFlow(id, finalists, flows) {
    if (id === finalists[0].id) return { a: 100, b: 0 };
    if (id === finalists[1].id) return { a: 0, b: 100 };
    const f = flows[id] || { a: 40, b: 40 };
    return { a: Math.max(0, Number(f.a) || 0), b: Math.max(0, Number(f.b) || 0) };
  }

  // Only participants in round II enter the flow cards. Full abstention is
  // represented by no data, never invented 50/50 support for the finalists.
  function electorateTransfers(candidates, finalists, flows) {
    const ids = finalists.map(c => c.id);
    return candidates.map(c => {
      const f = finalistFlow(c.id, finalists, flows), total = f.a + f.b;
      return { candidateId: c.id, hasVoters: total > 0, percentages: total > 0
        ? roundGroupShares(ids, [f.a / total * 100, f.b / total * 100], [f.a > 0, f.b > 0])
        : Object.fromEntries(ids.map(id => [id, 0])) };
    });
  }

  function runoffDemographics({ candidates, finalists, round1Percentages, flows, turnoutR1, turnoutR2, exitPoll, round1Groups }) {
    const source = round1Groups || demographics(candidates, round1Percentages);
    const ids = finalists.map(c => c.id);
    const retained = candidates.reduce((sum, c) => {
      const f = finalistFlow(c.id, finalists, flows);
      return sum + turnoutR1 * (round1Percentages[c.id] || 0) / 100 * (f.a + f.b) / 100;
    }, 0);
    const newVoters = Math.max(0, turnoutR2 - retained);
    const newFlow = flows.newVoters || { a: 45, b: 55 };
    const result = {};
    for (const [category, rows] of Object.entries(source)) {
      const matrix = rows.map((row, i) => {
        const weight = row.weight ?? DEMOGRAPHIC_PROFILES[category][i].weight;
        const votes = [newVoters * weight * newFlow.a / 100, newVoters * weight * newFlow.b / 100];
        candidates.forEach(c => {
          const electorate = turnoutR1 * weight * (row.percentages[c.id] || 0) / 100;
          const f = finalistFlow(c.id, finalists, flows);
          votes[0] += electorate * f.a / 100;
          votes[1] += electorate * f.b / 100;
        });
        return votes;
      });
      // Preserve each finalist's inherited group distribution while matching
      // the national exit poll. Group weights reflect round-II participants.
      ids.forEach((id, c) => {
        const total = matrix.reduce((sum, row) => sum + row[c], 0);
        const scale = total > 0 ? (exitPoll[id] || 0) / total : 0;
        matrix.forEach(row => row[c] *= scale);
      });
      result[category] = rows.map((row, i) => {
        const total = matrix[i][0] + matrix[i][1];
        return { name: row.name, weight: total / 100, percentages: total > 0
          ? roundGroupShares(ids, matrix[i].map(v => v / total * 100), matrix[i].map(v => v > 0))
          : Object.fromEntries(ids.map(id => [id, 0])) };
      });
    }
    return result;
  }

  function create({ candidates, counties, turnout, latePoll, nationalSupport, random = Math.random }) {
    // County turnout weights must not change the national result entered by the
    // user. Scale each candidate's geographic distribution to the frozen target.
    // Calibrate the votes themselves so county/province/national totals agree.
    if (nationalSupport) {
      const totals = Object.fromEntries(candidates.map(c => [c.id,
        Object.values(counties).reduce((sum, county) => sum + (county.votes[c.id] || 0), 0)]));
      const supportSum = candidates.reduce((sum, c) => sum + (nationalSupport[c.id] || 0), 0);
      const totalVotes = Object.values(totals).reduce((sum, n) => sum + n, 0);
      const totalEligible = Object.values(counties).reduce((sum, c) => sum + c.eligible, 0);
      if (supportSum > 0) counties = Object.fromEntries(Object.entries(counties).map(([name, county]) => [name, {
        ...county,
        votes: Object.fromEntries(candidates.map(c => {
          const weight = totals[c.id] > 0 ? (county.votes[c.id] || 0) / totals[c.id] : county.eligible / totalEligible;
          return [c.id, weight * (totalVotes || totalEligible * turnout / 100) * (nationalSupport[c.id] || 0) / supportSum];
        }))
      }]));
    }
    const duration = 840 + (clamp(turnout, 0, 100) - 60) * 5;
    const sizes = Object.values(counties).map(c => Math.log(Math.max(1, c.eligible)));
    const min = Math.min(...sizes), span = Math.max(1, Math.max(...sizes) - min);
    const regions = Object.entries(counties).map(([name, c]) => {
      const size = (Math.log(Math.max(1, c.eligible)) - min) / span;
      return { ...c, name, finish: duration * (.44 + .50 * size + .06 * random()),
        delay: 12 + 24 * random(), exponent: .85 + .65 * random(), bias: .28 + .14 * random() };
    });
    const maxFinish = Math.max(...regions.map(c => c.finish));
    regions.forEach(c => c.finish = Math.min(duration, duration * (c.finish / maxFinish)));
    return { candidates, regions, duration, lateAt: latePoll ? 120 + 30 * Math.floor(random() * 7) : null };
  }
  function at(model, minute) {
    const ids = model.candidates.map(c => c.id);
    const empty = () => Object.fromEntries(ids.map(id => [id, 0]));
    const national = empty(), counties = {}, provinces = {};
    let counted = 0, commissions = 0;
    for (const c of model.regions) {
      // Reaching the simulation deadline completes every region, even if
      // floating-point arithmetic leaves a finish time a fraction above it.
      const t = minute >= model.duration || minute >= c.finish ? 1 : clamp((minute - c.delay) / (c.finish - c.delay), 0, 1);
      const count = t >= 1 ? c.commissions : Math.floor(c.commissions * Math.pow(t, c.exponent));
      const p = count / c.commissions;
      const votes = {};
      for (const cand of model.candidates) {
        // Cumulative counts never fall. Higher conservatism gives an early share bonus,
        // which vanishes exactly at completion in every individual county.
        const bias = clamp(cand.conservatism || 0, -1, 1) * c.bias;
        votes[cand.id] = (c.votes[cand.id] || 0) * p * (1 + bias * (1 - p));
        national[cand.id] += votes[cand.id];
      }
      counties[c.name] = { ...summarize(votes), counted: count, commissions: c.commissions, progress: p * 100 };
      const w = provinces[c.province] ||= { votes: empty(), counted: 0, commissions: 0 };
      ids.forEach(id => w.votes[id] += votes[id]);
      w.counted += count; w.commissions += c.commissions;
      counted += count; commissions += c.commissions;
    }
    for (const [name, w] of Object.entries(provinces)) {
      provinces[name] = { ...w, ...summarize(w.votes), progress: 100 * w.counted / w.commissions };
    }
    const complete = counted === commissions;
    return { ...summarize(national), counties, provinces, counted, commissions, complete, progress: complete ? 100 : 100 * counted / commissions };
  }
  function runoff(candidates, percentages, flows, error) {
    const pair = [...candidates].sort((a, b) => percentages[b.id] - percentages[a.id]).slice(0, 2);
    if (pair.length < 2) return null;
    let a = percentages[pair[0].id], b = percentages[pair[1].id];
    candidates.forEach(c => {
      if (pair.some(p => p.id === c.id)) return;
      const f = flows[c.id] || { a: 40, b: 40 };
      a += percentages[c.id] * f.a / 100; b += percentages[c.id] * f.b / 100;
    });
    const p = clamp(100 * a / (a + b) + clamp(error, -3, 3), 0, 100);
    return { pair, percentages: { [pair[0].id]: p, [pair[1].id]: 100 - p } };
  }
  const api = { create, at, runoff, summarize, survey, demographics, runoffDemographics, electorateTransfers };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.PresidentialNightModel = api;
})(typeof window !== 'undefined' ? window : globalThis);
