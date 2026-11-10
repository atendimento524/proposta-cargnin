import React, { useState } from 'react'
import {
  Check,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  Video,
  FileText,
  Sparkles,
  Calendar,
  MapPin,
  ArrowRight,
  Award,
  Trees,
  Hammer,
  Clock,
  Search,
  Target,
  Zap,
  ChevronDown,
  Building2,
  FileDown,
  Layers,
  Camera,
  Star,
  Users
} from 'lucide-react'

export default function App() {
  const [selectedPlan, setSelectedPlan] = useState<'presencial' | 'digital'>('presencial')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const whatsappMessage = encodeURIComponent(
    `Olá Débora / IDI Company! Analisamos a proposta comercial Plano Essential para a Madeireira Cargnin e escolhemos a modalidade ${
      selectedPlan === 'presencial' ? 'ESSENTIAL PRESENCIAL (R$ 2.900/mês)' : 'ESSENTIAL DIGITAL (R$ 2.500/mês)'
    }. Gostaria de alinhar os próximos passos para darmos início!`
  )

  const whatsappUrl = `https://wa.me/5548999550049?text=${whatsappMessage}`

  return (
    <div className="min-h-screen bg-[#0B0B0E] text-stone-100 font-sans selection:bg-[#721C24] selection:text-white">
      {/* Top Bar Announcement */}
      <div className="bg-gradient-to-r from-[#3D0A12] via-[#63121E] to-[#3D0A12] text-xs sm:text-sm py-2 px-4 text-center border-b border-[#D4AF37]/30 text-stone-200 flex items-center justify-center gap-2">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#D4AF37]/20 text-[#F5E6BE] font-medium text-[11px] uppercase tracking-wider border border-[#D4AF37]/40">
          <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" /> Exclusividade Regional
        </span>
        <span className="hidden sm:inline text-stone-300">|</span>
        <span className="font-light tracking-wide text-stone-200">
          Proposta Comercial Exclusiva para <strong className="text-white font-semibold">Madeireira Irmãos Cargnin</strong> • Imbituba/SC
        </span>
      </div>

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0B0B0E]/90 border-b border-stone-800/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#721C24] to-[#400B11] border border-[#D4AF37]/40 flex items-center justify-center shadow-lg shadow-[#721C24]/20">
              <span className="font-serif font-bold text-lg text-[#F5E6BE] tracking-tighter">IDI</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-serif font-bold text-base sm:text-lg tracking-wider text-white">IDI COMPANY</span>
                <span className="text-stone-500 text-xs">×</span>
                <span className="font-semibold text-xs sm:text-sm text-[#E5C378] tracking-wide">MADEIREIRA CARGNIN</span>
              </div>
              <span className="text-[10px] sm:text-xs text-stone-400 font-light">Estratégia, Conteúdo e Posicionamento Comercial</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#investimento"
              className="hidden md:inline-flex items-center px-4 py-2 rounded-lg text-xs uppercase tracking-wider font-semibold text-stone-300 hover:text-white transition-colors"
            >
              Ver Investimento
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#721C24] via-[#8C1E2B] to-[#721C24] hover:from-[#8C1E2B] hover:to-[#A32333] text-white text-xs sm:text-sm font-semibold tracking-wide border border-[#D4AF37]/30 shadow-lg shadow-[#721C24]/30 transition-all hover:scale-[1.02]"
            >
              <span>Falar com a IDI</span>
              <ArrowRight className="w-4 h-4 text-[#E5C378]" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#721C24]/20 blur-[120px] rounded-full pointer-events-none -z-10" />
        <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-[#D4AF37]/5 blur-[140px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-900/90 border border-stone-800 text-stone-300 text-xs sm:text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 text-[#E5C378]" />
            <span className="text-[#E5C378] font-semibold">Plano Essential</span>
            <span className="text-stone-500">•</span>
            <span>Marketing, Conteúdo e Tráfego Pago</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-tight text-white leading-[1.15] max-w-4xl mx-auto mb-6">
            Sua experiência no mercado merece ser vista por{' '}
            <span className="italic font-serif bg-gradient-to-r from-[#F5E6BE] via-[#E5C378] to-[#C5A059] bg-clip-text text-transparent">
              mais clientes.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-stone-300 font-light max-w-3xl mx-auto leading-relaxed mb-8">
            A <strong className="text-white font-medium">Madeireira Cargnin</strong> conhece seus produtos. A{' '}
            <strong className="text-white font-medium">IDI Company</strong> sabe como apresentar esse conhecimento às pessoas certas.
          </p>

          <p className="text-sm sm:text-base text-stone-400 max-w-2xl mx-auto leading-relaxed mb-10">
            Nossa proposta é unir conteúdo educativo, anúncios estratégicos e automação para fortalecer a marca, aumentar sua presença digital e gerar novas oportunidades comerciais em Imbituba e região.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="#investimento"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#721C24] via-[#8C1E2B] to-[#721C24] hover:from-[#8C1E2B] hover:to-[#A32333] text-white font-semibold text-base border border-[#D4AF37]/40 shadow-xl shadow-[#721C24]/30 transition-all hover:scale-[1.02] flex items-center justify-center gap-3"
            >
              <span>Ver Opções de Investimento</span>
              <ArrowRight className="w-5 h-5 text-[#E5C378]" />
            </a>
            <a
              href="#estrategia"
              className="w-full sm:w-auto px-6 py-4 rounded-xl bg-stone-900/80 hover:bg-stone-800 text-stone-300 hover:text-white font-medium text-base border border-stone-800 transition-all flex items-center justify-center gap-2"
            >
              <span>Conhecer os 7 Pilares</span>
              <ChevronDown className="w-4 h-4 text-stone-400" />
            </a>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 text-left">
            <div className="p-4 sm:p-5 rounded-xl bg-stone-900/60 border border-stone-800/80 backdrop-blur-sm group hover:border-[#D4AF37]/40 transition-colors">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-white mb-1">12</div>
              <div className="text-xs uppercase tracking-wider font-semibold text-[#E5C378] mb-1">Publicações Mensais</div>
              <p className="text-[11px] sm:text-xs text-stone-400 leading-snug">Conteúdo estratégico focado em soluções e diferenciais da Cargnin.</p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-stone-900/60 border border-stone-800/80 backdrop-blur-sm group hover:border-[#D4AF37]/40 transition-colors">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-white mb-1">4</div>
              <div className="text-xs uppercase tracking-wider font-semibold text-[#E5C378] mb-1">Vídeos Educativos</div>
              <p className="text-[11px] sm:text-xs text-stone-400 leading-snug">Com o vendedor especialista, transmitindo autoridade e gerando orçamentos.</p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-stone-900/60 border border-stone-800/80 backdrop-blur-sm group hover:border-[#D4AF37]/40 transition-colors">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-white mb-1">2 Canais</div>
              <div className="text-xs uppercase tracking-wider font-semibold text-[#E5C378] mb-1">Meta & Google Ads</div>
              <p className="text-[11px] sm:text-xs text-stone-400 leading-snug">Alcance quem quer construir no Instagram e capture quem já busca no Google.</p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-stone-900/60 border border-stone-800/80 backdrop-blur-sm group hover:border-[#D4AF37]/40 transition-colors">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-white mb-1">100%</div>
              <div className="text-xs uppercase tracking-wider font-semibold text-[#E5C378] mb-1">Exclusividade Regional</div>
              <p className="text-[11px] sm:text-xs text-stone-400 leading-snug">Não atendemos nenhuma outra madeireira em Imbituba durante o contrato.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Diferenciais Reais */}
      <section className="py-16 sm:py-20 bg-stone-950/70 border-y border-stone-800/70">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#721C24]/30 border border-[#721C24]/60 text-[#F5C2C7] text-xs font-semibold uppercase tracking-wider mb-3">
              <Target className="w-3.5 h-3.5 text-[#E5C378]" /> Oportunidade Identificada
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-normal text-white mb-4">
              Por que a Madeireira Cargnin é diferente de qualquer outra concorrente?
            </h2>
            <p className="text-sm sm:text-base text-stone-400 font-light leading-relaxed">
              Ao pesquisar a história e a estrutura da Madeireira Irmãos Cargnin em Imbituba, encontramos diferenciais valiosos que merecem protagonismo comercial na internet:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="p-6 rounded-2xl bg-stone-900/50 border border-stone-800 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#721C24]/30 border border-[#721C24]/60 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-[#E5C378]" />
              </div>
              <div>
                <h3 className="font-serif font-semibold text-lg text-white mb-1">Mais de 20 Anos de História</h3>
                <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
                  Tradição e solidez em Imbituba e litoral catarinense. Em construção, reputação é o maior ativo para fechar pedidos com tranquilidade.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-stone-900/50 border border-stone-800 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#721C24]/30 border border-[#721C24]/60 flex items-center justify-center shrink-0">
                <Hammer className="w-6 h-6 text-[#E5C378]" />
              </div>
              <div>
                <h3 className="font-serif font-semibold text-lg text-white mb-1">Tratamento em Autoclave Próprio</h3>
                <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
                  Usina própria de preservação de madeira, garantindo resistência total contra cupins, brocas e umidade. Qualidade controlada do início ao fim.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-stone-900/50 border border-stone-800 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#721C24]/30 border border-[#721C24]/60 flex items-center justify-center shrink-0">
                <Trees className="w-6 h-6 text-[#E5C378]" />
              </div>
              <div>
                <h3 className="font-serif font-semibold text-lg text-white mb-1">Reflorestamento Próprio & Certificação FSC</h3>
                <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
                  Madeira sustentável, rastreada e ecologicamente correta. Um diferencial decisivo para arquitetos, construtores e donos de obra.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-stone-900/50 border border-stone-800 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#721C24]/30 border border-[#721C24]/60 flex items-center justify-center shrink-0">
                <Building2 className="w-6 h-6 text-[#E5C378]" />
              </div>
              <div>
                <h3 className="font-serif font-semibold text-lg text-white mb-1">Do Caibro à Casa de Madeira Completa</h3>
                <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
                  Capacidade para fornecer desde mourões, tábuas, vigas e decks até projetos inteiros de casas pré-fabricadas com assistência qualificada.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7 Pilares Estratégicos */}
      <div id="estrategia" className="py-20 sm:py-28 max-w-5xl mx-auto px-4 sm:px-6 space-y-24">
        {/* 01. Conteúdo */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-serif font-bold text-sm sm:text-base text-[#D4AF37] px-3 py-1 rounded bg-[#721C24]/40 border border-[#D4AF37]/30">01</span>
            <span className="text-xs uppercase tracking-widest text-stone-400 font-semibold">Conteúdo & Posicionamento</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif text-white mb-6">
            Plano Essential — 12 publicações mensais estratégicas
          </h2>
          <p className="text-sm sm:text-base text-stone-300 leading-relaxed mb-8 max-w-3xl">
            Planejamento, redação, design, edição e publicação dos conteúdos, com foco nos produtos, diferenciais e necessidades reais dos clientes da madeireira.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-stone-900/70 border border-stone-800">
              <div className="flex items-center gap-2 text-[#E5C378] font-semibold text-sm mb-2">
                <CheckCircle2 className="w-4 h-4" /> 12 Posts Estratégicos
              </div>
              <p className="text-xs text-stone-400 leading-relaxed">Posts no feed e carrosséis com dados técnicos, comparativos de madeira e inspirações de obras reais.</p>
            </div>
            <div className="p-5 rounded-xl bg-stone-900/70 border border-stone-800">
              <div className="flex items-center gap-2 text-[#E5C378] font-semibold text-sm mb-2">
                <Video className="w-4 h-4" /> 4 Vídeos Educativos
              </div>
              <p className="text-xs text-stone-400 leading-relaxed">Em formato Reels com o vendedor mais experiente da equipe, sanando dúvidas e conduzindo ao WhatsApp.</p>
            </div>
            <div className="p-5 rounded-xl bg-stone-900/70 border border-stone-800">
              <div className="flex items-center gap-2 text-[#E5C378] font-semibold text-sm mb-2">
                <Layers className="w-4 h-4" /> Gestão Editorial Completa
              </div>
              <p className="text-xs text-stone-400 leading-relaxed">Pautas, redação de legendas comerciais persuasivas e agendamento nos horários de maior impacto.</p>
            </div>
          </div>
        </section>

        {/* 02. Vídeos */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-serif font-bold text-sm sm:text-base text-[#D4AF37] px-3 py-1 rounded bg-[#721C24]/40 border border-[#D4AF37]/30">02</span>
            <span className="text-xs uppercase tracking-widest text-stone-400 font-semibold">Humanização & Autoridade</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif text-white mb-4">
            Vídeos com quem entende do assunto na prática
          </h2>
          <p className="text-sm sm:text-base text-stone-300 leading-relaxed mb-8 max-w-3xl">
            Um dos vendedores mais experientes da equipe será o rosto dos conteúdos educativos. A IDI Company ficará responsável pela criação dos roteiros, direcionamento das falas, edição e publicação dos quatro vídeos mensais.
          </p>

          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-stone-900/90 to-stone-950 border border-stone-800 mb-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Video className="w-5 h-5 text-[#E5C378]" />
                <h3 className="font-serif font-semibold text-lg text-white">Exemplos de Pautas Roteirizadas pela IDI:</h3>
              </div>
              <span className="text-xs text-stone-400 hidden sm:inline">Roteiros prontos para o vendedor falar</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-stone-950/80 border border-stone-800 flex flex-col justify-between">
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-semibold bg-[#721C24]/40 text-[#F5C2C7] border border-[#721C24]/60 mb-2">Roteiro 01</span>
                  <h4 className="font-medium text-sm text-stone-100 mb-2">"Madeira tratada ou bruta: qual escolher?"</h4>
                  <p className="text-xs text-stone-400 leading-relaxed">Explicar aplicações em áreas externas vs internas, tempo de durabilidade e economia real antes de comprar.</p>
                </div>
                <div className="mt-4 pt-3 border-t border-stone-800 text-[11px] text-[#E5C378] flex items-center gap-1 font-medium">
                  <Check className="w-3.5 h-3.5" /> Quebra objeção de preço
                </div>
              </div>

              <div className="p-4 rounded-xl bg-stone-950/80 border border-stone-800 flex flex-col justify-between">
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-semibold bg-[#721C24]/40 text-[#F5C2C7] border border-[#721C24]/60 mb-2">Roteiro 02</span>
                  <h4 className="font-medium text-sm text-stone-100 mb-2">"O erro que pode encarecer seu deck"</h4>
                  <p className="text-xs text-stone-400 leading-relaxed">Orientar sobre espaçamento correto, bitola da madeira, ventilação inferior e fixadores adequados para não empenar.</p>
                </div>
                <div className="mt-4 pt-3 border-t border-stone-800 text-[11px] text-[#E5C378] flex items-center gap-1 font-medium">
                  <Check className="w-3.5 h-3.5" /> Atrai público de alto padrão
                </div>
              </div>

              <div className="p-4 rounded-xl bg-stone-950/80 border border-stone-800 flex flex-col justify-between">
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-semibold bg-[#721C24]/40 text-[#F5C2C7] border border-[#721C24]/60 mb-2">Roteiro 03</span>
                  <h4 className="font-medium text-sm text-stone-100 mb-2">"Caibro, linha ou barrote: qual a diferença?"</h4>
                  <p className="text-xs text-stone-400 leading-relaxed">Apresentar produtos reais do pátio da Cargnin, ensinando mestres de obra e donos de casa a calcular o material certo.</p>
                </div>
                <div className="mt-4 pt-3 border-t border-stone-800 text-[11px] text-[#E5C378] flex items-center gap-1 font-medium">
                  <Check className="w-3.5 h-3.5" /> Gera pedidos de orçamento
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 03. Automação e E-book */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-serif font-bold text-sm sm:text-base text-[#D4AF37] px-3 py-1 rounded bg-[#721C24]/40 border border-[#D4AF37]/30">03</span>
            <span className="text-xs uppercase tracking-widest text-stone-400 font-semibold">Conversão & Captação</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif text-white mb-2">
            Automação de Instagram + E-book Isca Digital
          </h2>
          <p className="text-stone-400 text-sm italic mb-6">"Do comentário ao atendimento comercial no WhatsApp."</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-stone-900/70 border border-stone-800 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#721C24]/30 border border-[#721C24]/60 flex items-center justify-center mb-4">
                  <FileText className="w-5 h-5 text-[#E5C378]" />
                </div>
                <div className="text-xs uppercase font-semibold text-[#E5C378] tracking-wider mb-1">Entrega Inicial Única</div>
                <h3 className="font-serif font-bold text-lg text-white mb-2">E-book como Isca Digital Estratégica</h3>
                <div className="p-3 rounded-lg bg-stone-950/80 border border-stone-800 text-xs text-stone-300 mb-3 italic">
                  "Guia prático para escolher madeira e materiais para sua obra sem cometer erros"
                </div>
                <p className="text-xs text-stone-400 leading-relaxed">
                  Quem baixa esse material está em fase de planejamento ativo de obra. É o filtro perfeito para separar curiosos de compradores reais.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-stone-800 text-[11px] text-stone-500">
                Redação, diagramação visual e entrega automática via mensagem.
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-stone-900/70 border border-stone-800 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#721C24]/30 border border-[#721C24]/60 flex items-center justify-center mb-4">
                  <Zap className="w-5 h-5 text-[#E5C378]" />
                </div>
                <div className="text-xs uppercase font-semibold text-[#E5C378] tracking-wider mb-1">Atendimento Instantâneo</div>
                <h3 className="font-serif font-bold text-lg text-white mb-2">Fluxo Automatizado de Direct</h3>
                <p className="text-xs text-stone-400 leading-relaxed mb-3">
                  Respostas automáticas no Instagram para comentários e mensagens no Direct, direcionando interessados para o contato direto com a equipe comercial.
                </p>
                <ul className="space-y-1.5 text-xs text-stone-300">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#E5C378]" /> Resposta em segundos 24 horas por dia
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#E5C378]" /> Direcionamento qualificado para o WhatsApp dos vendedores
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#E5C378]" /> Fluxos objetivos previamente combinados
                  </li>
                </ul>
              </div>
              <div className="mt-4 pt-3 border-t border-stone-800 text-[11px] text-stone-500">
                Nenhum contato qualificado se perde no Direct.
              </div>
            </div>
          </div>
        </section>

        {/* 04. Tráfego Pago */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-serif font-bold text-sm sm:text-base text-[#D4AF37] px-3 py-1 rounded bg-[#721C24]/40 border border-[#D4AF37]/30">04</span>
            <span className="text-xs uppercase tracking-widest text-stone-400 font-semibold">Tráfego Pago & Performance</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif text-white mb-4">
            Gestão de campanhas nas duas principais plataformas
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 rounded-2xl bg-stone-900/60 border border-stone-800">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-lg bg-[#721C24]/30 border border-[#721C24]/50">
                  <Users className="w-5 h-5 text-[#E5C378]" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-base text-white">Meta Ads — Instagram e Facebook</h3>
                  <span className="text-xs text-stone-400">Reconhecimento & Desejo</span>
                </div>
              </div>
              <p className="text-xs text-stone-400 leading-relaxed mb-3">
                Campanhas para ampliar o reconhecimento da madeireira em Imbituba e litoral, divulgar produtos e estimular novos contatos comerciais.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-stone-900/60 border border-stone-800">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-lg bg-[#721C24]/30 border border-[#721C24]/50">
                  <Search className="w-5 h-5 text-[#E5C378]" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-base text-white">Google Ads — Rede de Pesquisa</h3>
                  <span className="text-xs text-stone-400">Intenção de Compra Imediata</span>
                </div>
              </div>
              <p className="text-xs text-stone-400 leading-relaxed mb-3">
                Anúncios para alcançar pessoas que já estão pesquisando termos como "madeira tratada", "deck de madeira" ou "madeireira em Imbituba".
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-r from-stone-900 via-stone-900/90 to-stone-950 border border-[#D4AF37]/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#D4AF37]/20 text-[#F3E5AB] text-xs font-semibold uppercase tracking-wider mb-2 border border-[#D4AF37]/40">
                Transparência Total
              </span>
              <h4 className="text-lg font-serif font-bold text-white mb-1">Investimento Recomendado em Anúncios</h4>
              <p className="text-xs sm:text-sm text-stone-400 max-w-xl">
                R$ 2.000 / mês pago diretamente às plataformas Meta e Google pelas contas da Madeireira Cargnin, sem repasse ou intermediação financeira da IDI Company.
              </p>
            </div>
            <div className="text-right shrink-0 bg-stone-950/80 px-6 py-4 rounded-xl border border-stone-800">
              <span className="text-[11px] text-stone-400 uppercase tracking-wider block">Verba de Mídia</span>
              <span className="text-2xl sm:text-3xl font-serif font-bold text-[#E5C378]">R$ 2.000</span>
              <span className="text-xs text-stone-400 block">/ mês (direto às plataformas)</span>
            </div>
          </div>
        </section>

        {/* 05. Tabela de Investimento */}
        <section id="investimento" className="relative scroll-mt-28">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-serif font-bold text-sm sm:text-base text-[#D4AF37] px-3 py-1 rounded bg-[#721C24]/40 border border-[#D4AF37]/30">05</span>
            <span className="text-xs uppercase tracking-widest text-stone-400 font-semibold">Investimento & Condições Comerciais</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif text-white mb-4">
            Duas modalidades de investimento, com foco em resultado
          </h2>
          <p className="text-sm sm:text-base text-stone-300 leading-relaxed mb-10 max-w-3xl">
            Contrato de 6 meses. Investimento em anúncios de R$ 2.000/mês sugerido à parte para ambas as modalidades.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Essential Digital */}
            <div
              onClick={() => setSelectedPlan('digital')}
              className={`cursor-pointer rounded-3xl p-6 sm:p-8 transition-all flex flex-col justify-between ${
                selectedPlan === 'digital'
                  ? 'bg-stone-900 border-2 border-stone-400 shadow-2xl relative'
                  : 'bg-stone-950/60 border border-stone-800/80 hover:border-stone-700 opacity-80 hover:opacity-100'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-stone-800 text-stone-300">
                    Sem Gravação Presencial
                  </span>
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${selectedPlan === 'digital' ? 'border-white bg-white text-stone-900' : 'border-stone-600'}`}>
                    {selectedPlan === 'digital' && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-1">ESSENTIAL DIGITAL</h3>
                <p className="text-xs text-stone-400 mb-6">Vídeos gravados e enviados pela equipe da Cargnin com orientação da IDI.</p>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm text-stone-400 font-serif">R$</span>
                    <span className="text-4xl sm:text-5xl font-serif font-bold text-white">2.500</span>
                    <span className="text-stone-400 text-sm">/ mês</span>
                  </div>
                  <span className="text-xs text-stone-400 block mt-1">Total de 6 meses: R$ 15.000</span>
                </div>

                <div className="space-y-3 pt-6 border-t border-stone-800 text-xs sm:text-sm text-stone-300">
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>12 publicações mensais estratégicas</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>4 vídeos educativos incluídos com roteiros da IDI</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Edição completa dos vídeos enviados</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Automação de Direct no Instagram para orçamentos</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>E-book Isca Digital exclusivo desenvolvido</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Gestão completa de Tráfego Pago (Meta e Google Ads)</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-stone-500">
                    <span className="w-4 h-4 shrink-0 text-center font-bold">✕</span>
                    <span>Gravação presencial in loco não inclusa</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4">
                <button className="w-full py-3 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-center font-semibold text-xs sm:text-sm block transition-colors border border-stone-700">
                  Escolher Essential Digital
                </button>
              </div>
            </div>

            {/* Essential Presencial */}
            <div
              onClick={() => setSelectedPlan('presencial')}
              className={`cursor-pointer rounded-3xl p-6 sm:p-8 transition-all flex flex-col justify-between ${
                selectedPlan === 'presencial'
                  ? 'bg-gradient-to-b from-[#25070B] via-[#160608] to-[#0D0405] border-2 border-[#D4AF37] shadow-2xl shadow-[#721C24]/40 relative'
                  : 'bg-stone-950/70 border border-stone-800 hover:border-stone-700 opacity-80 hover:opacity-100'
              }`}
            >
              <div className="absolute -top-3.5 right-6 bg-gradient-to-r from-[#D4AF37] via-[#F5E6BE] to-[#C5A059] text-stone-950 font-bold text-[11px] uppercase tracking-wider px-3.5 py-1 rounded-full shadow-lg flex items-center gap-1.5">
                <Star className="w-3.5 h-3.5 fill-stone-950" /> Mais Escolhido & Recomendado
              </div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#721C24]/60 text-[#F5C2C7] border border-[#721C24]">
                    Com Gravação Presencial Bimestral
                  </span>
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${selectedPlan === 'presencial' ? 'border-[#D4AF37] bg-[#D4AF37] text-stone-950' : 'border-stone-600'}`}>
                    {selectedPlan === 'presencial' && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-1">ESSENTIAL PRESENCIAL</h3>
                <p className="text-xs text-stone-300 mb-6">Equipe IDI Company in loco a cada dois meses para captar e dirigir tudo.</p>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm text-[#E5C378] font-serif">R$</span>
                    <span className="text-4xl sm:text-5xl font-serif font-bold text-white">2.900</span>
                    <span className="text-stone-300 text-sm">/ mês</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-stone-400">Total de 6 meses: R$ 17.400</span>
                    <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-300 border border-emerald-800/60 font-medium">
                      Apenas +R$ 400/mês
                    </span>
                  </div>
                </div>

                <div className="space-y-3 pt-6 border-t border-[#721C24]/50 text-xs sm:text-sm text-stone-200">
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#E5C378] shrink-0 mt-0.5" />
                    <span><strong className="text-white">Todas as entregas</strong> do Essential Digital</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#E5C378] shrink-0 mt-0.5" />
                    <span><strong className="text-white">Visita de gravação presencial a cada 2 meses</strong> pela equipe IDI</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#E5C378] shrink-0 mt-0.5" />
                    <span>Direção e condução de fala do vendedor especialista ao vivo</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#E5C378] shrink-0 mt-0.5" />
                    <span>Captação de imagens profissionais no pátio e usina de autoclave</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#E5C378] shrink-0 mt-0.5" />
                    <span>Automação do Direct + E-book estratégico entregue</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#E5C378] shrink-0 mt-0.5" />
                    <span>Gestão completa de Tráfego Pago (Meta e Google Ads)</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4">
                <button className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#721C24] via-[#8C1E2B] to-[#721C24] hover:from-[#8C1E2B] hover:to-[#A32333] text-white text-center font-bold text-xs sm:text-sm block transition-all shadow-xl shadow-[#721C24]/40 border border-[#D4AF37]/50">
                  Escolher Essential Presencial (Recomendado)
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 p-5 rounded-2xl bg-stone-900/40 border border-stone-800 text-xs sm:text-sm text-stone-400 space-y-2">
            <div className="font-semibold text-stone-300 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#E5C378]" /> Condições Comerciais e Ajustes de Escopo:
            </div>
            <ul className="list-disc list-inside space-y-1 text-stone-400 text-xs">
              <li><strong>E-book como entrega inicial única:</strong> Tema aprovado em conjunto e entregue nos primeiros 30 dias.</li>
              <li><strong>Automação de Direct:</strong> Fluxos principais previamente combinados para direcionamento comercial ao WhatsApp.</li>
              <li><strong>Duração da visita presencial:</strong> Diária de gravação bimestral programada, gerando o lote de vídeos dos 60 dias seguintes.</li>
              <li><strong>Investimento em anúncios:</strong> R$ 2.000/mês pago direto às plataformas Google e Meta pelo cliente.</li>
            </ul>
          </div>
        </section>

        {/* 06. Exclusividade Regional */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-serif font-bold text-sm sm:text-base text-[#D4AF37] px-3 py-1 rounded bg-[#721C24]/40 border border-[#D4AF37]/30">06</span>
            <span className="text-xs uppercase tracking-widest text-stone-400 font-semibold">Exclusividade Regional</span>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#1C0609] via-stone-950 to-stone-900 border-2 border-[#D4AF37]/40 relative overflow-hidden">
            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#F3E5AB] text-xs font-semibold uppercase tracking-wider mb-4">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" /> Um Diferencial Reservado à Madeireira Cargnin
              </div>
              <h2 className="text-2xl sm:text-4xl font-serif text-white mb-4">
                Durante 6 meses, a IDI Company não atenderá outra madeireira em Imbituba
              </h2>
              <p className="text-sm sm:text-base text-stone-300 leading-relaxed mb-6 font-light">
                Durante os seis meses de contrato, a IDI Company não atenderá outra empresa concorrente direta do segmento de madeireiras na região de Imbituba, Santa Catarina. Essa exclusividade permite desenvolver uma estratégia direcionada à marca, preservando os interesses comerciais da Cargnin.
              </p>
            </div>
          </div>
        </section>

        {/* 07. Nosso Compromisso */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-serif font-bold text-sm sm:text-base text-[#D4AF37] px-3 py-1 rounded bg-[#721C24]/40 border border-[#D4AF37]/30">07</span>
            <span className="text-xs uppercase tracking-widest text-stone-400 font-semibold">Nosso Compromisso</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif text-white mb-4">
            Planejar, executar, acompanhar e aprimorar
          </h2>
          <p className="text-sm sm:text-base text-stone-300 leading-relaxed mb-8 max-w-3xl">
            Ao longo dos seis meses, a IDI Company será responsável por planejar, executar, acompanhar e aprimorar as ações de marketing contratadas. A proposta contempla reuniões de alinhamento, acompanhamento dos indicadores e apresentação mensal dos resultados.
          </p>

          <div className="p-8 rounded-2xl bg-gradient-to-r from-stone-950 via-[#2A060B] to-stone-950 border border-stone-800 text-center max-w-3xl mx-auto">
            <p className="font-serif text-lg sm:text-xl text-stone-200 leading-relaxed italic mb-4">
              "O objetivo não é apenas publicar conteúdos. É fazer com que mais pessoas conheçam a qualidade dos produtos da Cargnin, confiem na empresa e procurem sua equipe quando precisarem comprar madeira."
            </p>
            <div className="flex items-center justify-center gap-2">
              <span className="font-serif font-bold text-sm tracking-wider text-white">IDI COMPANY</span>
              <span className="text-stone-500">•</span>
              <span className="text-xs text-[#E5C378] tracking-wide">Conectando gestão e estratégia, com propósito.</span>
            </div>
          </div>
        </section>
      </div>

      {/* Fechamento & CTA Final */}
      <section className="bg-gradient-to-b from-[#160608] to-[#0B0B0E] border-t border-[#721C24]/40 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#721C24] to-[#400B11] border border-[#D4AF37]/50 flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-[#721C24]/50">
            <Sparkles className="w-8 h-8 text-[#E5C378]" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif text-white mb-4">
            Pronto para iniciar essa parceria?
          </h2>
          <p className="text-sm sm:text-base text-stone-300 max-w-2xl mx-auto leading-relaxed mb-8">
            Vamos colocar o conhecimento dos vendedores experientes da Cargnin para gerar novos orçamentos todos os meses.
          </p>

          <div className="p-6 rounded-2xl bg-stone-900/80 border border-[#D4AF37]/40 max-w-md mx-auto mb-8 text-left">
            <span className="text-[11px] uppercase tracking-wider text-[#E5C378] font-semibold block mb-1">Modalidade Selecionada:</span>
            <div className="flex items-center justify-between">
              <span className="font-serif font-bold text-lg text-white">
                {selectedPlan === 'presencial' ? 'Plano Essential Presencial' : 'Plano Essential Digital'}
              </span>
              <span className="font-serif font-bold text-xl text-[#E5C378]">
                {selectedPlan === 'presencial' ? 'R$ 2.900/mês' : 'R$ 2.500/mês'}
              </span>
            </div>
            <p className="text-xs text-stone-400 mt-2">
              {selectedPlan === 'presencial'
                ? 'Inclui visita de gravação presencial a cada 2 meses pela equipe IDI.'
                : 'Vídeos gravados pela equipe Cargnin com edição e roteiros da IDI.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-4 rounded-xl bg-gradient-to-r from-[#721C24] via-[#8C1E2B] to-[#721C24] hover:from-[#8C1E2B] hover:to-[#A32333] text-white font-bold text-base border border-[#D4AF37]/50 shadow-2xl shadow-[#721C24]/50 transition-all hover:scale-[1.02] flex items-center justify-center gap-3"
            >
              <span>Aprovar Proposta no WhatsApp</span>
              <ArrowRight className="w-5 h-5 text-[#E5C378]" />
            </a>
            <button
              onClick={() => window.print()}
              className="w-full sm:w-auto px-6 py-4 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white font-medium text-sm border border-stone-800 transition-colors flex items-center justify-center gap-2"
            >
              <FileDown className="w-4 h-4 text-stone-400" />
              <span>Imprimir / Salvar PDF</span>
            </button>
          </div>

          <p className="text-xs text-stone-500 mt-8">
            Validade desta apresentação: 15 dias corridos • Sujeita à disponibilidade da exclusividade regional em Imbituba/SC.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-900 bg-[#070709] py-8 text-center text-xs text-stone-500">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-serif font-bold text-stone-300">IDI COMPANY</span>
            <span>×</span>
            <span className="text-stone-400 font-medium">MADEIREIRA CARGNIN</span>
          </div>
          <div>Plano Essential • Marketing Digital e Conteúdo • Imbituba/SC</div>
          <div className="text-[11px] text-stone-400">Conectando gestão e estratégia, com propósito.</div>
        </div>
      </footer>
    </div>
  )
}
