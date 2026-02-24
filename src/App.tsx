import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, 
  ChevronLeft, 
  Globe, 
  ArrowUp, 
  Layout, 
  TrendingUp, 
  Users, 
  Truck, 
  CreditCard, 
  ShieldCheck,
  ExternalLink,
  Smartphone,
  ShoppingBag,
  Search,
  Zap,
  BarChart3,
  CheckCircle2,
  Target,
  MessageSquare,
  MousePointer2,
  Share2,
  Database,
  Headphones,
  LineChart,
  HeartHandshake,
  Box,
  MapPin,
  Clock,
  Settings,
  ArrowRight,
  ArrowLeft,
  Menu,
  X,
  Code2
} from 'lucide-react';
import { Language } from './types';
import { TRANSLATIONS, PROPOSAL_DATA } from './constants';

export default function App() {
  const [lang, setLang] = useState<Language>('fa');
  const [showProposal, setShowProposal] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState<string>(PROPOSAL_DATA[0].id);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const t = TRANSLATIONS[lang];
  const isRtl = lang === 'fa';

  useEffect(() => {
    document.dir = isRtl ? 'rtl' : 'ltr';
  }, [isRtl]);

  useEffect(() => {
    if (!showProposal) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && window.innerWidth < 1024) {
            setActiveSectionId(entry.target.id);
          }
        });
      },
      { threshold: 0.2, rootMargin: '-20% 0px -20% 0px' }
    );

    const sections = document.querySelectorAll('[data-section]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [showProposal]);

  const toggleLang = () => {
    setLang(prev => prev === 'fa' ? 'en' : 'fa');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      if (window.innerWidth < 1024) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        setActiveSectionId(id);
      }
    }
    setIsMenuOpen(false);
  };

  const activeSection = PROPOSAL_DATA.find(s => s.id === activeSectionId) || PROPOSAL_DATA[0];

  const getIcon = (id: string) => {
    switch (id) {
      case 'overview': return <Layout className="w-5 h-5" />;
      case 'development': return <ShoppingBag className="w-5 h-5" />;
      case 'marketing': return <Search className="w-5 h-5" />;
      case 'crm': return <Zap className="w-5 h-5" />;
      case 'logistics': return <Truck className="w-5 h-5" />;
      case 'payment': return <CreditCard className="w-5 h-5" />;
      default: return <CheckCircle2 className="w-5 h-5" />;
    }
  };

  const renderSection = (section: any) => {
    return (
      <div className="w-full">
        <div className="mb-12">
          <motion.h1 
            initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[32px] sm:text-[36px] font-black mb-4 tracking-tight text-zinc-900 leading-[1.1]"
          >
            {section.title[lang]}
          </motion.h1>
          <p className="text-[18px] text-zinc-500 max-w-2xl leading-relaxed font-normal mb-8">
            {section.subtitle?.[lang]}
          </p>
          
          {section.intro && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-zinc-100 p-8 rounded-[2rem] mb-12 shadow-sm relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl rounded-full -mr-16 -mt-16" />
              <p className="text-[16px] text-zinc-700 leading-relaxed font-normal whitespace-pre-line relative z-10">
                {section.intro[lang]}
              </p>
            </motion.div>
          )}
        </div>

        {section.id === 'development' ? (
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.categories?.map((cat: any, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-[2.5rem] border border-zinc-100 hover:border-blue-200 transition-all hover:shadow-xl hover:shadow-blue-500/5 group"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-zinc-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      {idx === 0 && <Layout className="w-6 h-6" />}
                      {idx === 1 && <ShoppingBag className="w-6 h-6" />}
                      {idx === 2 && <Zap className="w-6 h-6" />}
                      {idx === 3 && <CreditCard className="w-6 h-6" />}
                      {idx === 4 && <Truck className="w-6 h-6" />}
                      {idx === 5 && <Smartphone className="w-6 h-6" />}
                    </div>
                    <h3 className="text-lg font-bold text-zinc-900">{cat.title[lang]}</h3>
                  </div>
                  <ul className="space-y-3">
                    {cat.points.map((point: any, pIdx: number) => (
                      <li key={pIdx} className="flex items-start gap-3 text-[14px] text-zinc-500">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 text-emerald-500 shrink-0" />
                        <span>{point[lang]}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {section.strategicVision && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-[#0f172a] rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl shadow-blue-900/20"
              >
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full -mr-48 -mt-48" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/5 blur-[100px] rounded-full -ml-32 -mb-32" />
                
                <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
                  <div className="lg:w-1/3">
                    <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20">
                      <TrendingUp className="w-10 h-10 text-white" />
                    </div>
                    <h2 className="text-3xl font-black leading-tight mb-4">
                      {section.strategicVision.title[lang]}
                    </h2>
                    <div className="h-1 w-20 bg-blue-500 rounded-full" />
                  </div>
                  <div className="lg:w-2/3">
                    <p className="text-lg text-zinc-300 leading-relaxed font-normal whitespace-pre-line">
                      {section.strategicVision.content[lang]}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {section.closing && (
              <div className="text-center py-12">
                <p className="text-xl font-medium text-zinc-400 italic max-w-3xl mx-auto leading-relaxed">
                  "{section.closing[lang]}"
                </p>
              </div>
            )}
          </div>
        ) : section.id === 'marketing' ? (
          <div className="space-y-16">
            <div className="bg-white rounded-[3rem] p-12 border border-zinc-100 shadow-sm">
              <h3 className="text-2xl font-black mb-10 flex items-center gap-4">
                <div className="w-2 h-8 bg-emerald-500 rounded-full" />
                {isRtl ? 'اقدامات ضروری برای ورود موفق' : 'Essential Entry Actions'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.items.map((item: any, idx: number) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    </div>
                    <p className="text-[15px] text-zinc-600 font-medium leading-snug">{item[lang]}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {section.categories?.map((cat: any, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-zinc-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 blur-[60px] rounded-full -mr-24 -mt-24 group-hover:bg-blue-500/20 transition-all" />
                  
                  <div className="flex items-center gap-5 mb-6">
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-blue-400 border border-white/10 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      {idx === 0 && <Search className="w-7 h-7" />}
                      {idx === 1 && <Share2 className="w-7 h-7" />}
                      {idx === 2 && <MessageSquare className="w-7 h-7" />}
                      {idx === 3 && <Target className="w-7 h-7" />}
                    </div>
                    <h3 className="text-xl font-bold">{cat.title[lang]}</h3>
                  </div>

                  {cat.intro && (
                    <p className="text-zinc-400 text-sm mb-8 leading-relaxed group-hover:text-zinc-300 transition-colors">
                      {cat.intro[lang]}
                    </p>
                  )}

                  <div className="space-y-4 mb-8">
                    {cat.points.map((point: any, pIdx: number) => (
                      <div key={pIdx} className="flex items-center gap-3 text-zinc-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                        <span className="text-[14px] font-normal">{point[lang]}</span>
                      </div>
                    ))}
                  </div>

                  {cat.benefits && (
                    <div className="mt-8 pt-8 border-t border-white/5">
                      <span className="text-[11px] uppercase tracking-widest text-zinc-500 mb-4 block">
                        {isRtl ? '📌 مزایای برای کسب‌وکار' : '📌 Business Benefits'}
                      </span>
                      <div className="space-y-3">
                        {cat.benefits.map((benefit: any, bIdx: number) => (
                          <div key={bIdx} className="flex items-start gap-2 text-[13px] text-emerald-400/80">
                            <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                            <span>{benefit[lang]}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {section.strategicVision && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[3rem] p-12 text-white shadow-2xl shadow-blue-500/20 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
                    <BarChart3 className="w-8 h-8" />
                    {section.strategicVision.title[lang]}
                  </h3>
                  <p className="text-lg text-blue-50 leading-relaxed font-normal whitespace-pre-line max-w-4xl">
                    {section.strategicVision.content[lang]}
                  </p>
                </div>
              </motion.div>
            )}

            {section.closing && (
              <div className="text-center py-8">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  className="inline-block px-8 py-4 bg-zinc-100 rounded-full border border-zinc-200"
                >
                  <p className="text-lg font-bold text-zinc-800">
                    {section.closing[lang]}
                  </p>
                </motion.div>
              </div>
            )}
          </div>
        ) : section.id === 'crm' ? (
          <div className="space-y-16">
            <div className="bg-white rounded-[3rem] p-12 border border-zinc-100 shadow-sm">
              <h3 className="text-2xl font-black mb-10 flex items-center gap-4">
                <div className="w-2 h-8 bg-blue-500 rounded-full" />
                {isRtl ? 'مزایای استراتژیک سیستم CRM' : 'Strategic CRM Benefits'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {section.items.map((item: any, idx: number) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="bg-zinc-50 p-6 rounded-3xl border border-zinc-100 flex flex-col items-center text-center group hover:bg-white hover:border-blue-200 hover:shadow-lg transition-all"
                  >
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-600 mb-4 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all">
                      {idx === 0 && <Users className="w-6 h-6" />}
                      {idx === 1 && <ShieldCheck className="w-6 h-6" />}
                      {idx === 2 && <TrendingUp className="w-6 h-6" />}
                      {idx === 3 && <Layout className="w-6 h-6" />}
                      {idx === 4 && <Zap className="w-6 h-6" />}
                    </div>
                    <p className="text-sm font-bold text-zinc-800 leading-tight">{item[lang]}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {section.categories?.map((cat: any, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-[2.5rem] p-10 border border-zinc-100 hover:border-blue-100 transition-all shadow-sm hover:shadow-xl hover:shadow-blue-500/5 group"
                >
                  <div className="flex items-center gap-6 mb-8">
                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      {idx === 0 && <Database className="w-8 h-8" />}
                      {idx === 1 && <ShoppingBag className="w-8 h-8" />}
                      {idx === 2 && <Headphones className="w-8 h-8" />}
                      {idx === 3 && <Zap className="w-8 h-8" />}
                      {idx === 4 && <LineChart className="w-8 h-8" />}
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-zinc-900">{cat.title[lang]}</h3>
                      <div className="h-1 w-12 bg-blue-500 mt-2 rounded-full" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {cat.points.map((point: any, pIdx: number) => (
                      <div key={pIdx} className="flex items-center gap-3 p-3 bg-zinc-50 rounded-xl border border-zinc-100">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                        <span className="text-[13px] text-zinc-600 font-medium">{point[lang]}</span>
                      </div>
                    ))}
                  </div>

                  {cat.benefits && (
                    <div className="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100">
                      <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm mb-2">
                        <CheckCircle2 className="w-4 h-4" />
                        {isRtl ? '📌 مزیت اصلی:' : '📌 Key Benefit:'}
                      </div>
                      <p className="text-sm text-emerald-600 leading-relaxed">
                        {cat.benefits[0][lang]}
                      </p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {section.strategicVision && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-zinc-900 rounded-[3rem] p-12 text-white relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full -mr-48 -mt-48" />
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                  <div className="md:w-1/4 flex justify-center">
                    <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/40">
                      <HeartHandshake className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-2xl font-black mb-4">{section.strategicVision.title[lang]}</h3>
                    <p className="text-xl text-zinc-300 leading-relaxed font-light italic">
                      "{section.strategicVision.content[lang]}"
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {section.closing && (
              <div className="text-center py-10">
                <div className="inline-flex items-center gap-4 px-10 py-5 bg-white rounded-full border-2 border-zinc-100 shadow-lg">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  <p className="text-xl font-black text-zinc-900">
                    {section.closing[lang]}
                  </p>
                </div>
              </div>
            )}
          </div>
        ) : section.id === 'logistics' ? (
          <div className="space-y-16">
            <div className="space-y-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                  <Settings className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-black text-zinc-900">
                  {isRtl ? 'ساختار پیشنهادی لجستیک در فاز اول' : 'Proposed Logistics Structure in Phase 1'}
                </h3>
              </div>

              <div className="space-y-8">
                {section.categories?.map((cat: any, idx: number) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-[2.5rem] p-10 border border-zinc-100 shadow-sm relative overflow-hidden group"
                  >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-zinc-50 rounded-full -mr-32 -mt-32 group-hover:bg-blue-50 transition-colors" />
                    
                    <div className="relative z-10">
                      <div className="flex flex-col lg:flex-row gap-10">
                        <div className="lg:w-1/3">
                          <div className="flex items-center gap-3 mb-6">
                            <span className="text-4xl font-black text-blue-100 group-hover:text-blue-200 transition-colors">{idx + 1}</span>
                            <h4 className="text-xl font-black text-zinc-900">{cat.title[lang]}</h4>
                          </div>
                          {cat.intro && (
                            <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                              {cat.intro[lang]}
                            </p>
                          )}
                        </div>
                        
                        <div className="lg:w-2/3 flex flex-col justify-between">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                            {cat.points.map((point: any, pIdx: number) => (
                              <div key={pIdx} className="flex items-center gap-3 p-4 bg-zinc-50 rounded-2xl border border-zinc-100 group-hover:bg-white transition-colors">
                                <div className="w-2 h-2 rounded-full bg-blue-500" />
                                <span className="text-[14px] text-zinc-700 font-medium">{point[lang]}</span>
                              </div>
                            ))}
                          </div>

                          {cat.benefits && (
                            <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100 flex items-start gap-4">
                              <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center text-white shrink-0">
                                <Zap className="w-5 h-5" />
                              </div>
                              <div>
                                <span className="text-[11px] uppercase tracking-widest text-emerald-700 font-bold mb-1 block">
                                  {isRtl ? '📌 مزیت استراتژیک' : '📌 Strategic Benefit'}
                                </span>
                                <p className="text-sm text-emerald-600 font-medium">
                                  {cat.benefits[0][lang]}
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {section.steps && (
              <div className="bg-[#0f172a] rounded-[3rem] p-12 text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                  <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 blur-[100px] rounded-full -ml-48 -mt-48" />
                </div>
                
                <h3 className="text-2xl font-black mb-12 text-center relative z-10">
                  {isRtl ? 'مراحل فلو ارسال در فاز اول' : 'Shipping Flow Steps in Phase 1'}
                </h3>

                <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-8">
                  {section.steps.map((step: any, idx: number) => (
                    <div key={idx} className="flex flex-col items-center text-center group relative flex-1">
                      <div className="w-16 h-16 bg-white/10 rounded-full border border-white/20 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:border-blue-500 transition-all relative z-10">
                        <span className="text-xl font-black">{idx + 1}</span>
                      </div>
                      <p className="text-sm font-bold text-zinc-300 group-hover:text-white transition-colors max-w-[120px]">
                        {step[lang]}
                      </p>
                      
                      {idx < section.steps!.length - 1 && (
                        <div className={`hidden lg:block absolute top-8 ${isRtl ? '-left-1/2' : '-right-1/2'} w-full h-px bg-white/10`} />
                      )}
                    </div>
                  ))}
                </div>
                
                <div className="mt-12 pt-8 border-t border-white/5 text-center">
                  <p className="text-zinc-400 text-sm italic">
                    {isRtl ? 'این ساختار باعث ایجاد شفافیت کامل در فرآیند خواهد شد.' : 'This structure ensures complete transparency throughout the process.'}
                  </p>
                </div>
              </div>
            )}

            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-black text-zinc-900">
                  {isRtl ? 'مزایای استراتژیک این مدل لجستیک' : 'Strategic Benefits of this Logistics Model'}
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.items.map((item: any, idx: number) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white p-6 rounded-3xl border border-zinc-100 flex items-center gap-4 shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <p className="text-sm font-bold text-zinc-800 leading-tight">{item[lang]}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {section.strategicVision && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white rounded-[3rem] p-12 border-2 border-zinc-100 shadow-xl relative overflow-hidden"
              >
                <div className="flex flex-col md:flex-row items-center gap-12">
                  <div className="md:w-1/4 flex justify-center">
                    <div className="w-24 h-24 bg-zinc-900 rounded-3xl flex items-center justify-center shadow-2xl rotate-3">
                      <MapPin className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-2xl font-black mb-4 text-zinc-900">{section.strategicVision.title[lang]}</h3>
                    <p className="text-lg text-zinc-600 leading-relaxed font-medium">
                      {section.strategicVision.content[lang]}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {section.closing && (
              <div className="text-center py-10">
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="inline-block"
                >
                  <p className="text-2xl font-black text-zinc-400 italic">
                    "{section.closing[lang]}"
                  </p>
                </motion.div>
              </div>
            )}
          </div>
        ) : section.id === 'payment' ? (
          <div className="space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {section.categories?.map((cat: any, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-[2.5rem] p-8 border border-zinc-100 shadow-sm hover:shadow-xl transition-all group"
                >
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    {idx === 0 && <CreditCard className="w-7 h-7" />}
                    {idx === 1 && <Globe className="w-7 h-7" />}
                    {idx === 2 && <Zap className="w-7 h-7" />}
                  </div>
                  <h3 className="text-xl font-black text-zinc-900 mb-6">{cat.title[lang]}</h3>
                  
                  <div className="space-y-3 mb-8">
                    {cat.points.map((point: any, pIdx: number) => (
                      <div key={pIdx} className="flex items-center gap-3 p-3 bg-zinc-50 rounded-xl border border-zinc-100">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                        <span className="text-[13px] text-zinc-600 font-medium">{point[lang]}</span>
                      </div>
                    ))}
                  </div>

                  {cat.benefits && (
                    <div className="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
                      <p className="text-[12px] text-emerald-700 font-bold mb-2 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4" />
                        {isRtl ? 'مزایای کلیدی:' : 'Key Benefits:'}
                      </p>
                      <p className="text-[12px] text-emerald-600 leading-relaxed">
                        {cat.benefits[0][lang]}
                      </p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {section.management && (
              <div className="bg-zinc-900 rounded-[3rem] p-12 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full -mr-48 -mt-48" />
                
                <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row gap-12 items-center mb-12">
                    <div className="lg:w-1/3">
                      <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                        <Settings className="w-8 h-8" />
                      </div>
                      <h3 className="text-3xl font-black">{section.management.title[lang]}</h3>
                    </div>
                    <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                      {section.management.points.map((p: any, i: number) => (
                        <div key={i} className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                          <div className="w-2 h-2 rounded-full bg-blue-500" />
                          <span className="text-sm font-medium text-zinc-300">{p[lang]}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-blue-600/20 p-6 rounded-2xl border border-blue-500/30 text-center">
                    <p className="text-lg font-bold text-blue-400">
                      {isRtl ? '📌 نتیجه:' : '📌 Outcome:'} {section.management.outcome[lang]}
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-black text-zinc-900">
                  {isRtl ? 'مزایای استراتژیک این مدل پرداخت' : 'Strategic Benefits of this Payment Model'}
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {section.items.map((item: any, idx: number) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 rounded-3xl border border-zinc-100 shadow-sm flex flex-col items-center text-center group hover:border-blue-200 transition-all"
                  >
                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <p className="text-sm font-bold text-zinc-800 leading-tight">{item[lang]}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {section.strategicVision && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-[3rem] p-12 border-2 border-zinc-100 shadow-xl relative overflow-hidden"
              >
                <div className="flex flex-col md:flex-row items-center gap-12">
                  <div className="md:w-1/4 flex justify-center">
                    <div className="w-24 h-24 bg-zinc-900 rounded-3xl flex items-center justify-center shadow-2xl rotate-3">
                      <Target className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-2xl font-black mb-4 text-zinc-900">{section.strategicVision.title[lang]}</h3>
                    <p className="text-xl text-zinc-600 leading-relaxed font-medium italic">
                      "{section.strategicVision.content[lang]}"
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {section.closing && (
              <div className="text-center py-10">
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="inline-block px-12 py-6 bg-zinc-100 rounded-full border border-zinc-200"
                >
                  <p className="text-2xl font-black text-zinc-400 italic">
                    "{section.closing[lang]}"
                  </p>
                </motion.div>
              </div>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5">
              <div className="bg-[#0f172a] rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl shadow-blue-900/20 h-full flex flex-col">
                <div className="absolute top-0 right-0 p-10 opacity-5">
                  {getIcon(section.id)}
                </div>
                
                {section.vision ? (
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                      <div className="w-1.5 h-6 bg-blue-500 rounded-full" />
                      {section.vision.title[lang]}
                    </h3>
                    <div className="text-[14px] text-zinc-300 leading-relaxed whitespace-pre-line mb-8 font-normal">
                      {section.vision.content[lang]}
                    </div>
                  </div>
                ) : (
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                      <div className="w-1.5 h-6 bg-blue-500 rounded-full" />
                      {isRtl ? 'مزایای استراتژیک' : 'Strategic Benefits'}
                    </h3>
                    <ul className="space-y-6">
                      {section.items.map((item: any, i: number) => (
                        <motion.li 
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-start gap-4"
                        >
                          <div className="mt-2 w-2 h-2 rounded-full bg-blue-500 shrink-0 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                          <div>
                            <p className="text-[14px] font-normal text-white mb-1">{item[lang]}</p>
                            {item.description && (
                              <p className="text-[12px] text-zinc-400 leading-relaxed font-normal">{item.description[lang]}</p>
                            )}
                          </div>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                )}

                {section.closing && (
                  <div className="mt-auto pt-8 border-t border-white/10">
                    <p className="text-[14px] font-normal italic text-blue-400 leading-relaxed">
                      {section.closing[lang]}
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-white rounded-[2.5rem] p-10 border border-zinc-100 shadow-sm h-full">
                <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                  <div className="w-1.5 h-6 bg-emerald-500 rounded-full" />
                  {isRtl ? 'محدوده عملیاتی' : 'Operational Scope'}
                </h3>
                
                {section.categories ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {section.categories.map((cat: any, i: number) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="p-5 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-emerald-200 transition-colors group"
                      >
                        <h4 className="text-[14px] font-bold text-zinc-900 mb-3 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          {cat.title[lang]}
                        </h4>
                        <ul className="space-y-2">
                          {cat.points.map((p: any, j: number) => (
                            <li key={j} className="text-[12px] text-zinc-500 flex items-center gap-2 font-normal">
                              <div className="w-1 h-1 rounded-full bg-zinc-300" />
                              {p[lang]}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-8">
                    {section.items.map((item: any, i: number) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + (i * 0.1) }}
                        className="flex items-start gap-5 group"
                      >
                        <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                          <ShieldCheck className="w-5 h-5 text-emerald-600 group-hover:text-white" />
                        </div>
                        <div>
                          <p className="text-[14px] font-normal text-zinc-900 mb-2">{item[lang]}</p>
                          {item.description && (
                            <p className="text-[14px] text-zinc-500 leading-relaxed font-normal">{item.description[lang]}</p>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="mt-12 flex flex-wrap gap-3">
          <div className="px-5 py-2.5 bg-white text-blue-700 text-[10px] font-normal uppercase tracking-widest rounded-xl border border-zinc-100 shadow-sm flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            {isRtl ? 'فناوری‌محور' : 'Technology-driven'}
          </div>
          <div className="px-5 py-2.5 bg-white text-emerald-700 text-[10px] font-normal uppercase tracking-widest rounded-xl border border-zinc-100 shadow-sm flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
            {isRtl ? 'راهکارهای اختصاصی' : 'Tailored Services'}
          </div>
        </div>
      </div>
    );
  };

  if (!showProposal) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center p-4 overflow-hidden relative">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-emerald-500/10 blur-[160px] rounded-full animate-pulse" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-blue-600/10 blur-[160px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150" />
          <div 
            className="absolute inset-0 opacity-[0.03]" 
            style={{ 
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }} 
          />
        </div>

        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute top-12 left-1/2 -translate-x-1/2 z-20"
        >
          <div className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
            <p className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.4em]">
              {lang === 'fa' ? 'پروپوزال رسمی - محرمانه' : 'Official Proposal - Confidential'}
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center z-10 max-w-3xl px-4 md:px-6"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.2 
            }}
            className="mb-8 md:mb-12 inline-block relative"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-full scale-150" />
            
            <div className="relative w-20 h-20 md:w-28 md:h-28 bg-gradient-to-br from-emerald-400 via-blue-500 to-blue-700 rounded-2xl md:rounded-[2.5rem] flex items-center justify-center shadow-[0_20px_50px_rgba(16,185,129,0.3)] mx-auto overflow-hidden group">
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <ShieldCheck className="w-10 h-10 md:w-14 md:h-14 text-white drop-shadow-2xl" />
              
              {/* Shine effect */}
              <motion.div 
                animate={{ 
                  left: ['-100%', '200%'] 
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "linear",
                  repeatDelay: 1
                }}
                className="absolute top-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
              />
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-[24px] sm:text-[36px] md:text-[48px] font-black text-white mb-4 md:mb-6 tracking-tighter leading-tight px-2"
          >
            {t.entryTitle}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-zinc-400 text-[16px] md:text-[20px] mb-10 md:mb-14 max-w-xl mx-auto leading-relaxed font-light"
          >
            {lang === 'fa' 
              ? 'یک راهکار جامع برای توسعه کسب‌وکار و استراتژی دیجیتال در بازار امارات متحده عربی.' 
              : 'A comprehensive solution for business development and digital strategy in the UAE market.'}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            <button
              onClick={() => setShowProposal(true)}
              className="w-full sm:w-auto group relative px-8 py-4 md:px-10 md:py-5 bg-white text-black text-[15px] font-black rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_20px_40px_rgba(255,255,255,0.1)]"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                {t.enterButton}
                <motion.div
                  animate={{ x: isRtl ? [-4, 0, -4] : [4, 0, 4] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  {isRtl ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
                </motion.div>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-500 opacity-0 group-hover:opacity-10 transition-opacity" />
            </button>

            <button
              onClick={toggleLang}
              className="w-full sm:w-auto group px-8 py-4 md:px-10 md:py-5 bg-white/5 text-white text-[15px] font-bold rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-3 backdrop-blur-sm"
            >
              <Globe className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
              {t.switchLanguage}
            </button>
          </motion.div>
        </motion.div>

        {/* Footer Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-zinc-600 text-[10px] font-bold uppercase tracking-[0.3em]"
        >
          © 2024 Jaber Khoory Strategy Group
        </motion.div>
      </div>
    );
  }

  const activeSectionIndex = PROPOSAL_DATA.findIndex(s => s.id === activeSectionId);
  const progress = Math.round(((activeSectionIndex + 1) / PROPOSAL_DATA.length) * 100);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-zinc-900 font-sans">
      {/* Mobile Sticky Header */}
      <header className="lg:hidden sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-md shadow-blue-200">
            <ShieldCheck className="w-5 h-5 text-white" />
          </div>
          <span className="font-black text-[14px] tracking-tight">JABERKHOORY</span>
        </div>
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 hover:bg-zinc-100 rounded-xl transition-colors"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden fixed inset-0 z-40 bg-white pt-20 px-4 pb-8 flex flex-col"
          >
            <nav className="flex-grow space-y-1 overflow-y-auto no-scrollbar">
              {PROPOSAL_DATA.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all text-start ${
                    activeSectionId === section.id 
                      ? 'bg-blue-50 text-blue-700' 
                      : 'text-zinc-500'
                  }`}
                >
                  <span className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                    activeSectionId === section.id ? 'bg-blue-600 text-white' : 'bg-zinc-100 text-zinc-400'
                  }`}>
                    {getIcon(section.id)}
                  </span>
                  <span className="text-[14px] font-bold">{section.title[lang]}</span>
                </button>
              ))}
            </nav>
            <div className="mt-6 pt-6 border-t border-zinc-100 space-y-4">
              <button
                onClick={toggleLang}
                className="w-full px-4 py-4 text-[14px] font-bold bg-zinc-900 text-white rounded-2xl flex items-center justify-center gap-2"
              >
                <Globe className="w-4 h-4" />
                {t.switchLanguage}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col lg:flex-row min-h-screen">
        
        {/* Sidebar (Desktop Only) */}
        <aside className={`hidden lg:flex w-80 bg-white border-zinc-200 z-50 sticky top-0 h-screen flex-col ${isRtl ? 'border-l' : 'border-r'}`}>
          <div className="flex p-8 border-b border-zinc-100 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-[16px] font-bold leading-tight tracking-tight">JABERKHOORY</h2>
                <p className="text-[11px] text-zinc-400 uppercase tracking-[0.2em] font-normal">Strategy</p>
              </div>
            </div>
          </div>

          <nav className="flex-grow overflow-y-auto p-4 space-y-1">
            {PROPOSAL_DATA.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSectionId(section.id)}
                className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all text-start group relative ${
                  activeSectionId === section.id 
                    ? 'bg-blue-50 text-blue-700' 
                    : 'hover:bg-zinc-50 text-zinc-500'
                }`}
              >
                {activeSectionId === section.id && (
                  <motion.div 
                    layoutId="active-pill"
                    className={`absolute inset-y-2 w-1 bg-blue-600 rounded-full ${isRtl ? 'right-0' : 'left-0'}`}
                  />
                )}
                <span className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                  activeSectionId === section.id ? 'bg-blue-600 text-white' : 'bg-zinc-100 text-zinc-400 group-hover:bg-zinc-200'
                }`}>
                  {getIcon(section.id)}
                </span>
                <span className="text-[14px] font-normal leading-relaxed">{section.title[lang]}</span>
              </button>
            ))}
          </nav>

          <div className="p-6 border-t border-zinc-100 space-y-4">
            <div className="bg-zinc-50 rounded-2xl p-5 border border-zinc-100">
              <div className="flex justify-between text-[11px] font-normal text-zinc-400 uppercase tracking-widest mb-3">
                <span>{isRtl ? 'وضعیت فعلی' : 'Current Status'}</span>
                <span className="text-blue-600 font-normal">{progress}%</span>
              </div>
              <div className="h-1.5 w-full bg-zinc-200 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  className="h-full bg-blue-600"
                />
              </div>
              <p className="text-[11px] text-zinc-400 mt-3 font-normal">
                {isRtl ? 'پیشرفت ارئه پروپوزال' : 'Proposal Presention Progress'}
              </p>
            </div>
            
            <button
              onClick={toggleLang}
              className="w-full px-4 py-3.5 text-[14px] font-normal bg-zinc-900 text-white rounded-2xl hover:bg-black transition-all active:scale-95 flex items-center justify-center gap-2 shadow-lg shadow-zinc-200"
            >
              <Globe className="w-4 h-4" />
              {t.switchLanguage}
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-grow p-4 lg:p-16 overflow-y-auto">
          <div className="max-w-5xl mx-auto">
            
            {/* Top Bar */}
            <div className="flex justify-between items-center mb-8 lg:mb-16">
              <button 
                onClick={() => setShowProposal(false)}
                className="text-xs font-black text-zinc-400 hover:text-black transition-colors flex items-center gap-2 uppercase tracking-widest"
              >
                {isRtl ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
                {isRtl ? 'بازگشت' : 'Back'}
              </button>
              <div className="flex items-center gap-4">
                <div className="px-3 py-1 bg-zinc-100 rounded-full text-[9px] font-black text-zinc-500 uppercase tracking-widest">
                  {lang === 'fa' ? 'محرمانه' : 'Confidential'}
                </div>
                <div className="hidden sm:block text-[9px] font-black text-zinc-300 uppercase tracking-[0.3em]">
                  REF: JK-2024-001
                </div>
              </div>
            </div>

            {/* Desktop View (Tabbed) */}
            <div className="hidden lg:block">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSectionId}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  {renderSection(activeSection)}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Mobile View (Continuous Scroll) */}
            <div className="lg:hidden space-y-24 pb-20">
              {PROPOSAL_DATA.map((section) => (
                <div key={section.id} id={section.id} data-section className="scroll-mt-24">
                  {renderSection(section)}
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function getIcon(id: string) {
  switch (id) {
    case 'overview': return <Layout className="w-5 h-5" />;
    case 'development': return <Code2 className="w-5 h-5" />;
    case 'marketing': return <Search className="w-5 h-5" />;
    case 'crm': return <Users className="w-5 h-5" />;
    case 'logistics': return <Settings className="w-5 h-5" />;
    case 'payment': return <CreditCard className="w-5 h-5" />;
    default: return <BarChart3 className="w-5 h-5" />;
  }
}

function renderSection(section: any) {
  const lang = (document.documentElement.dir === 'rtl' ? 'fa' : 'en') as 'fa' | 'en';
  const isRtl = lang === 'fa';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="space-y-12"
    >
      {/* Section Header */}
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
            {getIcon(section.id)}
          </div>
          <div>
            <h2 className="text-3xl font-black text-zinc-900 tracking-tight">{section.title[lang]}</h2>
            <p className="text-zinc-500 font-medium">{section.subtitle[lang]}</p>
          </div>
        </div>
        {section.intro && (
          <p className="text-lg text-zinc-600 leading-relaxed max-w-3xl font-normal">
            {section.intro[lang]}
          </p>
        )}
      </div>

      {/* Section Content */}
      {section.id === 'overview' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5">
            <div className="bg-[#0f172a] rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl shadow-blue-900/20 h-full flex flex-col">
              <div className="absolute top-0 right-0 p-10 opacity-5">
                {getIcon(section.id)}
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <div className="w-1.5 h-6 bg-blue-500 rounded-full" />
                  {section.vision?.title[lang]}
                </h3>
                <div className="text-[14px] text-zinc-300 leading-relaxed whitespace-pre-line mb-8 font-normal">
                  {section.vision?.content[lang]}
                </div>
              </div>
              {section.closing && (
                <div className="mt-auto pt-8 border-t border-white/10">
                  <p className="text-[14px] font-normal italic text-blue-400 leading-relaxed">
                    {section.closing[lang]}
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[2.5rem] p-10 border border-zinc-100 shadow-sm h-full">
              <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                <div className="w-1.5 h-6 bg-emerald-500 rounded-full" />
                {isRtl ? 'محدوده عملیاتی پروژه' : 'Operational Scope'}
              </h3>
              <div className="space-y-8">
                {section.items.map((item: any, i: number) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (i * 0.1) }}
                    className="flex items-start gap-5 group"
                  >
                    <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                      <ShieldCheck className="w-5 h-5 text-emerald-600 group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-[14px] font-normal text-zinc-900 mb-2">{item[lang]}</p>
                      {item.description && (
                        <p className="text-[14px] text-zinc-500 leading-relaxed font-normal">{item.description[lang]}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : section.id === 'development' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5">
            <div className="bg-[#0f172a] rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl shadow-blue-900/20 h-full flex flex-col">
              <div className="absolute top-0 right-0 p-10 opacity-5">
                {getIcon(section.id)}
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                  <div className="w-1.5 h-6 bg-blue-500 rounded-full" />
                  {isRtl ? 'مزایای استراتژیک این زیرساخت' : 'Strategic Benefits'}
                </h3>
                <ul className="space-y-6">
                  {section.items.map((item: any, i: number) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="mt-2 w-2 h-2 rounded-full bg-blue-500 shrink-0 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                      <div>
                        <p className="text-[14px] font-normal text-white mb-1">{item[lang]}</p>
                        {item.description && (
                          <p className="text-[12px] text-zinc-400 leading-relaxed font-normal">{item.description[lang]}</p>
                        )}
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
              {section.closing && (
                <div className="mt-auto pt-8 border-t border-white/10">
                  <p className="text-[14px] font-normal italic text-blue-400 leading-relaxed">
                    {section.closing[lang]}
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[2.5rem] p-10 border border-zinc-100 shadow-sm h-full">
              <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                <div className="w-1.5 h-6 bg-emerald-500 rounded-full" />
                {isRtl ? 'ویژگی‌های کلیدی پلتفرم' : 'Key Platform Features'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {section.categories?.map((cat: any, i: number) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-5 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-emerald-200 transition-colors group"
                  >
                    <h4 className="text-[14px] font-bold text-zinc-900 mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      {cat.title[lang]}
                    </h4>
                    <ul className="space-y-2">
                      {cat.points.map((p: any, j: number) => (
                        <li key={j} className="text-[12px] text-zinc-500 flex items-center gap-2 font-normal">
                          <div className="w-1 h-1 rounded-full bg-zinc-300" />
                          {p[lang]}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : section.id === 'marketing' ? (
        <div className="space-y-16">
          <div className="bg-white rounded-[3rem] p-12 border border-zinc-100 shadow-sm">
            <h3 className="text-2xl font-black mb-10 flex items-center gap-4">
              <div className="w-2 h-8 bg-emerald-500 rounded-full" />
              {isRtl ? 'اهداف کلیدی بازاریابی' : 'Key Marketing Objectives'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {section.items.map((item: any, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  </div>
                  <p className="text-[15px] text-zinc-600 font-medium leading-snug">{item[lang]}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {section.categories?.map((cat: any, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-zinc-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 blur-[60px] rounded-full -mr-24 -mt-24 group-hover:bg-blue-500/20 transition-all" />
                <div className="flex items-center gap-5 mb-6">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-blue-400 border border-white/10 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    {idx === 0 && <Search className="w-7 h-7" />}
                    {idx === 1 && <Share2 className="w-7 h-7" />}
                    {idx === 2 && <MessageSquare className="w-7 h-7" />}
                    {idx === 3 && <Target className="w-7 h-7" />}
                  </div>
                  <h3 className="text-xl font-bold">{cat.title[lang]}</h3>
                </div>
                {cat.intro && (
                  <p className="text-zinc-400 text-sm mb-8 leading-relaxed group-hover:text-zinc-300 transition-colors">
                    {cat.intro[lang]}
                  </p>
                )}
                <div className="space-y-4 mb-8">
                  {cat.points.map((point: any, pIdx: number) => (
                    <div key={pIdx} className="flex items-center gap-3 text-zinc-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                      <span className="text-[14px] font-normal">{point[lang]}</span>
                    </div>
                  ))}
                </div>
                {cat.benefits && (
                  <div className="mt-8 pt-8 border-t border-white/5">
                    <span className="text-[11px] uppercase tracking-widest text-zinc-500 mb-4 block">
                      {isRtl ? '📌 مزایای برای کسب‌وکار' : '📌 Business Benefits'}
                    </span>
                    <div className="space-y-3">
                      {cat.benefits.map((benefit: any, bIdx: number) => (
                        <div key={bIdx} className="flex items-start gap-2 text-[13px] text-emerald-400/80">
                          <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                          <span>{benefit[lang]}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {section.strategicVision && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[3rem] p-12 text-white shadow-2xl shadow-blue-500/20 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
              <div className="relative z-10">
                <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
                  <BarChart3 className="w-8 h-8" />
                  {section.strategicVision.title[lang]}
                </h3>
                <p className="text-lg text-blue-50 leading-relaxed font-normal whitespace-pre-line max-w-4xl">
                  {section.strategicVision.content[lang]}
                </p>
              </div>
            </motion.div>
          )}

          {section.closing && (
            <div className="text-center py-8">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                className="inline-block px-8 py-4 bg-zinc-100 rounded-full border border-zinc-200"
              >
                <p className="text-lg font-bold text-zinc-800">
                  {section.closing[lang]}
                </p>
              </motion.div>
            </div>
          )}
        </div>
      ) : section.id === 'crm' ? (
        <div className="space-y-16">
          <div className="bg-white rounded-[3rem] p-12 border border-zinc-100 shadow-sm">
            <h3 className="text-2xl font-black mb-10 flex items-center gap-4">
              <div className="w-2 h-8 bg-blue-500 rounded-full" />
              {isRtl ? 'مزایای استراتژیک سیستم CRM' : 'Strategic CRM Benefits'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {section.items.map((item: any, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-zinc-50 p-6 rounded-3xl border border-zinc-100 flex flex-col items-center text-center group hover:bg-white hover:border-blue-200 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-600 mb-4 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all">
                    {idx === 0 && <Users className="w-6 h-6" />}
                    {idx === 1 && <ShieldCheck className="w-6 h-6" />}
                    {idx === 2 && <TrendingUp className="w-6 h-6" />}
                    {idx === 3 && <Layout className="w-6 h-6" />}
                    {idx === 4 && <Zap className="w-6 h-6" />}
                  </div>
                  <p className="text-sm font-bold text-zinc-800 leading-tight">{item[lang]}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {section.categories?.map((cat: any, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-[2.5rem] p-10 border border-zinc-100 hover:border-blue-100 transition-all shadow-sm hover:shadow-xl hover:shadow-blue-500/5 group"
              >
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    {idx === 0 && <Database className="w-8 h-8" />}
                    {idx === 1 && <ShoppingBag className="w-8 h-8" />}
                    {idx === 2 && <Headphones className="w-8 h-8" />}
                    {idx === 3 && <Zap className="w-8 h-8" />}
                    {idx === 4 && <LineChart className="w-8 h-8" />}
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-zinc-900">{cat.title[lang]}</h3>
                    <div className="h-1 w-12 bg-blue-500 mt-2 rounded-full" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {cat.points.map((point: any, pIdx: number) => (
                    <div key={pIdx} className="flex items-center gap-3 p-3 bg-zinc-50 rounded-xl border border-zinc-100">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                      <span className="text-[13px] text-zinc-600 font-medium">{point[lang]}</span>
                    </div>
                  ))}
                </div>
                {cat.benefits && (
                  <div className="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100">
                    <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm mb-2">
                      <CheckCircle2 className="w-4 h-4" />
                      {isRtl ? '📌 مزیت اصلی:' : '📌 Key Benefit:'}
                    </div>
                    <p className="text-sm text-emerald-600 leading-relaxed">
                      {cat.benefits[0][lang]}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {section.strategicVision && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-zinc-900 rounded-[3rem] p-12 text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full -mr-48 -mt-48" />
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/4 flex justify-center">
                  <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/40">
                    <HeartHandshake className="w-12 h-12 text-white" />
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-2xl font-black mb-4">{section.strategicVision.title[lang]}</h3>
                  <p className="text-xl text-zinc-300 leading-relaxed font-light italic">
                    "{section.strategicVision.content[lang]}"
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {section.closing && (
            <div className="text-center py-10">
              <div className="inline-flex items-center gap-4 px-10 py-5 bg-white rounded-full border-2 border-zinc-100 shadow-lg">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                <p className="text-xl font-black text-zinc-900">
                  {section.closing[lang]}
                </p>
              </div>
            </div>
          )}
        </div>
      ) : section.id === 'logistics' ? (
        <div className="space-y-16">
          <div className="space-y-10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                <Settings className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-black text-zinc-900">
                {isRtl ? 'ساختار پیشنهادی لجستیک در فاز اول' : 'Proposed Logistics Structure in Phase 1'}
              </h3>
            </div>
            <div className="space-y-8">
              {section.categories?.map((cat: any, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-[2.5rem] p-10 border border-zinc-100 shadow-sm relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-zinc-50 rounded-full -mr-32 -mt-32 group-hover:bg-blue-50 transition-colors" />
                  <div className="relative z-10">
                    <div className="flex flex-col lg:flex-row gap-10">
                      <div className="lg:w-1/3">
                        <div className="flex items-center gap-3 mb-6">
                          <span className="text-4xl font-black text-blue-100 group-hover:text-blue-200 transition-colors">{idx + 1}</span>
                          <h4 className="text-xl font-black text-zinc-900">{cat.title[lang]}</h4>
                        </div>
                        {cat.intro && (
                          <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                            {cat.intro[lang]}
                          </p>
                        )}
                      </div>
                      <div className="lg:w-2/3 flex flex-col justify-between">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                          {cat.points.map((point: any, pIdx: number) => (
                            <div key={pIdx} className="flex items-center gap-3 p-4 bg-zinc-50 rounded-2xl border border-zinc-100 group-hover:bg-white transition-colors">
                              <div className="w-2 h-2 rounded-full bg-blue-500" />
                              <span className="text-[14px] text-zinc-700 font-medium">{point[lang]}</span>
                            </div>
                          ))}
                        </div>
                        {cat.benefits && (
                          <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100 flex items-start gap-4">
                            <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center text-white shrink-0">
                              <Zap className="w-5 h-5" />
                            </div>
                            <div>
                              <span className="text-[11px] uppercase tracking-widest text-emerald-700 font-bold mb-1 block">
                                {isRtl ? '📌 مزیت استراتژیک' : '📌 Strategic Benefit'}
                              </span>
                              <p className="text-sm text-emerald-600 font-medium">
                                {cat.benefits[0][lang]}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {section.steps && (
            <div className="bg-[#0f172a] rounded-[3rem] p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 blur-[100px] rounded-full -ml-48 -mt-48" />
              </div>
              <h3 className="text-2xl font-black mb-12 text-center relative z-10">
                {isRtl ? 'مراحل فلو ارسال در فاز اول' : 'Shipping Flow Steps in Phase 1'}
              </h3>
              <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-8">
                {section.steps.map((step: any, idx: number) => (
                  <div key={idx} className="flex flex-col items-center text-center group relative flex-1">
                    <div className="w-16 h-16 bg-white/10 rounded-full border border-white/20 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:border-blue-500 transition-all relative z-10">
                      <span className="text-xl font-black">{idx + 1}</span>
                    </div>
                    <p className="text-sm font-bold text-zinc-300 group-hover:text-white transition-colors max-w-[120px]">
                      {step[lang]}
                    </p>
                    {idx < section.steps!.length - 1 && (
                      <div className={`hidden lg:block absolute top-8 ${isRtl ? '-left-1/2' : '-right-1/2'} w-full h-px bg-white/10`} />
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-12 pt-8 border-t border-white/5 text-center">
                <p className="text-zinc-400 text-sm italic">
                  {isRtl ? 'این ساختار باعث ایجاد شفافیت کامل در فرآیند خواهد شد.' : 'This structure ensures complete transparency throughout the process.'}
                </p>
              </div>
            </div>
          )}

          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-black text-zinc-900">
                {isRtl ? 'مزایای استراتژیک این مدل لجستیک' : 'Strategic Benefits of this Logistics Model'}
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.items.map((item: any, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-6 rounded-3xl border border-zinc-100 flex items-center gap-4 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <p className="text-sm font-bold text-zinc-800 leading-tight">{item[lang]}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {section.strategicVision && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white rounded-[3rem] p-12 border-2 border-zinc-100 shadow-xl relative overflow-hidden"
            >
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/4 flex justify-center">
                  <div className="w-24 h-24 bg-zinc-900 rounded-3xl flex items-center justify-center shadow-2xl rotate-3">
                    <MapPin className="w-12 h-12 text-white" />
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-2xl font-black mb-4 text-zinc-900">{section.strategicVision.title[lang]}</h3>
                  <p className="text-lg text-zinc-600 leading-relaxed font-medium">
                    {section.strategicVision.content[lang]}
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {section.closing && (
            <div className="text-center py-10">
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="inline-block"
              >
                <p className="text-2xl font-black text-zinc-400 italic">
                  "{section.closing[lang]}"
                </p>
              </motion.div>
            </div>
          )}
        </div>
      ) : section.id === 'payment' ? (
        <div className="space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {section.categories?.map((cat: any, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-[2.5rem] p-8 border border-zinc-100 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {idx === 0 && <CreditCard className="w-7 h-7" />}
                  {idx === 1 && <Globe className="w-7 h-7" />}
                  {idx === 2 && <Zap className="w-7 h-7" />}
                </div>
                <h3 className="text-xl font-black text-zinc-900 mb-6">{cat.title[lang]}</h3>
                <div className="space-y-3 mb-8">
                  {cat.points.map((point: any, pIdx: number) => (
                    <div key={pIdx} className="flex items-center gap-3 p-3 bg-zinc-50 rounded-xl border border-zinc-100">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      <span className="text-[13px] text-zinc-600 font-medium">{point[lang]}</span>
                    </div>
                  ))}
                </div>
                {cat.benefits && (
                  <div className="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
                    <p className="text-[12px] text-emerald-700 font-bold mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" />
                      {isRtl ? 'مزایای کلیدی:' : 'Key Benefits:'}
                    </p>
                    <p className="text-[12px] text-emerald-600 leading-relaxed">
                      {cat.benefits[0][lang]}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {section.management && (
            <div className="bg-zinc-900 rounded-[3rem] p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full -mr-48 -mt-48" />
              <div className="relative z-10">
                <div className="flex flex-col lg:flex-row gap-12 items-center mb-12">
                  <div className="lg:w-1/3">
                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                      <Settings className="w-8 h-8" />
                    </div>
                    <h3 className="text-3xl font-black">{section.management.title[lang]}</h3>
                  </div>
                  <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {section.management.points.map((p: any, i: number) => (
                      <div key={i} className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                        <div className="w-2 h-2 rounded-full bg-blue-500" />
                        <span className="text-sm font-medium text-zinc-300">{p[lang]}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-blue-600/20 p-6 rounded-2xl border border-blue-500/30 text-center">
                  <p className="text-lg font-bold text-blue-400">
                    {isRtl ? '📌 نتیجه:' : '📌 Outcome:'} {section.management.outcome[lang]}
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-black text-zinc-900">
                {isRtl ? 'مزایای استراتژیک این مدل پرداخت' : 'Strategic Benefits of this Payment Model'}
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {section.items.map((item: any, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-3xl border border-zinc-100 shadow-sm flex flex-col items-center text-center group hover:border-blue-200 transition-all"
                >
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <p className="text-sm font-bold text-zinc-800 leading-tight">{item[lang]}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {section.strategicVision && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[3rem] p-12 border-2 border-zinc-100 shadow-xl relative overflow-hidden"
            >
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/4 flex justify-center">
                  <div className="w-24 h-24 bg-zinc-900 rounded-3xl flex items-center justify-center shadow-2xl rotate-3">
                    <Target className="w-12 h-12 text-white" />
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-2xl font-black mb-4 text-zinc-900">{section.strategicVision.title[lang]}</h3>
                  <p className="text-xl text-zinc-600 leading-relaxed font-medium italic">
                    "{section.strategicVision.content[lang]}"
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {section.closing && (
            <div className="text-center py-10">
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="inline-block px-12 py-6 bg-zinc-100 rounded-full border border-zinc-200"
              >
                <p className="text-2xl font-black text-zinc-400 italic">
                  "{section.closing[lang]}"
                </p>
              </motion.div>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-zinc-500">{isRtl ? 'محتوایی برای این بخش یافت نشد.' : 'No content found for this section.'}</p>
        </div>
      )}

      {/* Bottom Badges */}
      <div className="mt-12 flex flex-wrap gap-3">
        <div className="px-5 py-2.5 bg-white text-blue-700 text-[10px] font-normal uppercase tracking-widest rounded-xl border border-zinc-100 shadow-sm flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
          {isRtl ? 'فناوری‌محور' : 'Technology-driven'}
        </div>
        <div className="px-5 py-2.5 bg-white text-emerald-700 text-[10px] font-normal uppercase tracking-widest rounded-xl border border-zinc-100 shadow-sm flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
          {isRtl ? 'راهکارهای اختصاصی' : 'Tailored Services'}
        </div>
        <div className="px-5 py-2.5 bg-white text-zinc-600 text-[10px] font-normal uppercase tracking-widest rounded-xl border border-zinc-100 shadow-sm flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
          {isRtl ? 'رویکرد رشد' : 'Growth-oriented'}
        </div>
      </div>
    </motion.div>
  );
}
