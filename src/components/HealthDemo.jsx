import { useState } from "react";
import { Activity, Heart, Stethoscope, Search, ShieldCheck, Database, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";

const sampleMedicalRecords = [
  {
    code: "E11.9",
    disease: "Type 2 diabetes mellitus without complications",
    category: "Endocrine & Metabolic",
    riskLevel: "Moderate",
    recommendedAction: "Monitor HbA1c every 3-6 months; lifestyle modifications.",
  },
  {
    code: "I10",
    disease: "Essential (primary) hypertension",
    category: "Cardiovascular",
    riskLevel: "High",
    recommendedAction: "DASH diet adherence, BP tracking, ACE inhibitor evaluation.",
  },
  {
    code: "J45.909",
    disease: "Unspecified asthma, uncomplicated",
    category: "Respiratory",
    riskLevel: "Moderate",
    recommendedAction: "Inhaled corticosteroid maintenance + peak flow monitoring.",
  },
  {
    code: "K21.9",
    disease: "Gastro-esophageal reflux disease without esophagitis",
    category: "Gastrointestinal",
    riskLevel: "Low",
    recommendedAction: "Dietary adjustment, PPI therapy trial if symptoms persist.",
  },
  {
    code: "N18.3",
    disease: "Chronic kidney disease, stage 3 (moderate)",
    category: "Renal",
    riskLevel: "Critical",
    recommendedAction: "Nephrology referral, eGFR tracking, strict BP control.",
  },
];

const HealthDemo = () => {
  const [systolic, setSystolic] = useState(124);
  const [diastolic, setDiastolic] = useState(82);
  const [glucose, setGlucose] = useState(105);
  const [searchQuery, setSearchQuery] = useState("");

  const calculateVitalsStatus = () => {
    let bpStatus = "Normal";
    let bpColor = "text-emerald-500 bg-emerald-500/10 border-emerald-500/30";

    if (systolic >= 140 || diastolic >= 90) {
      bpStatus = "Stage 2 Hypertension";
      bpColor = "text-red-500 bg-red-500/10 border-red-500/30";
    } else if (systolic >= 130 || diastolic >= 80) {
      bpStatus = "Stage 1 Hypertension";
      bpColor = "text-amber-500 bg-amber-500/10 border-amber-500/30";
    } else if (systolic >= 120 && diastolic < 80) {
      bpStatus = "Elevated Blood Pressure";
      bpColor = "text-yellow-500 bg-yellow-500/10 border-yellow-500/30";
    }

    let glucoseStatus = "Normal Fasting";
    let glucoseColor = "text-emerald-500 bg-emerald-500/10 border-emerald-500/30";

    if (glucose >= 126) {
      glucoseStatus = "Diabetic Range (Fasting)";
      glucoseColor = "text-red-500 bg-red-500/10 border-red-500/30";
    } else if (glucose >= 100) {
      glucoseStatus = "Pre-diabetic Range";
      glucoseColor = "text-amber-500 bg-amber-500/10 border-amber-500/30";
    }

    return { bpStatus, bpColor, glucoseStatus, glucoseColor };
  };

  const { bpStatus, bpColor, glucoseStatus, glucoseColor } = calculateVitalsStatus();

  const filteredRecords = sampleMedicalRecords.filter(
    (record) =>
      record.disease.toLowerCase().includes(searchQuery.toLowerCase()) ||
      record.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      record.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="health-demo" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header Badge */}
        <div className="text-center mb-12" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 mb-4">
            <Activity className="w-4 h-4 text-red-500 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-300">
              Interactive Domain Demo
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white">
            Health Informatics <span className="text-red-600 dark:text-red-400">Sandbox</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Experience how I combine clinical informatics standards (ICD-10 classifications) with real-time reactive UI architecture and client-side decision support algorithms.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Module 1: Patient Clinical Vitals Analyzer */}
          <div
            className="p-6 sm:p-8 rounded-3xl border border-red-500/20 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-xl shadow-xl flex flex-col justify-between"
            data-aos="fade-right"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-2xl bg-red-500/10 text-red-600 dark:text-red-400">
                    <Heart className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                      Clinical Vitals &amp; Risk Classifier
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Real-time clinical triage rules engine
                    </p>
                  </div>
                </div>
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
              </div>

              {/* Slider Inputs */}
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-xs font-semibold mb-2 text-gray-700 dark:text-gray-300">
                    <span>Systolic BP (mmHg)</span>
                    <span className="font-mono text-red-600 dark:text-red-400 font-bold">{systolic} mmHg</span>
                  </div>
                  <input
                    type="range"
                    min="90"
                    max="190"
                    value={systolic}
                    onChange={(e) => setSystolic(Number(e.target.value))}
                    className="w-full accent-red-600 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold mb-2 text-gray-700 dark:text-gray-300">
                    <span>Diastolic BP (mmHg)</span>
                    <span className="font-mono text-red-600 dark:text-red-400 font-bold">{diastolic} mmHg</span>
                  </div>
                  <input
                    type="range"
                    min="60"
                    max="120"
                    value={diastolic}
                    onChange={(e) => setDiastolic(Number(e.target.value))}
                    className="w-full accent-red-600 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold mb-2 text-gray-700 dark:text-gray-300">
                    <span>Fasting Blood Glucose (mg/dL)</span>
                    <span className="font-mono text-red-600 dark:text-red-400 font-bold">{glucose} mg/dL</span>
                  </div>
                  <input
                    type="range"
                    min="70"
                    max="220"
                    value={glucose}
                    onChange={(e) => setGlucose(Number(e.target.value))}
                    className="w-full accent-red-600 cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Diagnostic Output Card */}
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-zinc-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Cardiovascular Classification:</span>
                <span className={`text-xs font-bold px-3 py-1 rounded-full border ${bpColor}`}>
                  {bpStatus}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Metabolic Status:</span>
                <span className={`text-xs font-bold px-3 py-1 rounded-full border ${glucoseColor}`}>
                  {glucoseStatus}
                </span>
              </div>
            </div>
          </div>

          {/* Module 2: ICD-10 Clinical Database Query Engine */}
          <div
            className="p-6 sm:p-8 rounded-3xl border border-red-500/20 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-xl shadow-xl flex flex-col justify-between"
            data-aos="fade-left"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-2xl bg-red-500/10 text-red-600 dark:text-red-400">
                  <Database className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                    ICD-10 Clinical Terminology Query
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Fast client-side medical ontology search
                  </p>
                </div>
              </div>

              {/* Search Bar */}
              <div className="relative mb-4">
                <Search className="absolute left-3.5 top-3 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search code (e.g. E11.9) or condition (e.g. asthma)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl text-xs bg-gray-100 dark:bg-zinc-800/80 border border-gray-200 dark:border-zinc-700 text-gray-900 dark:text-white focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>

              {/* Records List */}
              <div className="space-y-2.5 max-h-64 overflow-y-auto pr-1">
                {filteredRecords.length > 0 ? (
                  filteredRecords.map((rec) => (
                    <div
                      key={rec.code}
                      className="p-3 rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-800/40 hover:border-red-500/40 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-extrabold text-red-600 dark:text-red-400 bg-red-500/10 px-2 py-0.5 rounded">
                            {rec.code}
                          </span>
                          <span className="text-[11px] text-gray-500 dark:text-gray-400">
                            {rec.category}
                          </span>
                        </div>
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                            rec.riskLevel === "Critical"
                              ? "bg-red-500/15 text-red-600 dark:text-red-400"
                              : rec.riskLevel === "High"
                              ? "bg-amber-500/15 text-amber-600 dark:text-amber-400"
                              : "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400"
                          }`}
                        >
                          {rec.riskLevel} Risk
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-gray-800 dark:text-gray-200">
                        {rec.disease}
                      </p>
                      <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-1">
                        Guideline: {rec.recommendedAction}
                      </p>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-xs text-gray-500 dark:text-gray-400">
                    No matching clinical records found.
                  </div>
                )}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200 dark:border-zinc-800 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
              <span className="inline-flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                WHO ICD-10 Standards Aligned
              </span>
              <span>{filteredRecords.length} records active</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HealthDemo;
