import { useState, useRef } from 'react';
import { Menu, ArrowRight, Instagram, Facebook, ChevronLeft, ChevronRight, X } from 'lucide-react';

const carouselImages = [
  "https://res.cloudinary.com/dfbsqy5ul/image/upload/v1778102688/Ven_pide_unas_croquetas_y_disfruta_del_campo_como_se_debe-_saboreando_aguaducho_bar_camp_uwdhw1.jpg",
  "https://res.cloudinary.com/dfbsqy5ul/image/upload/v1778102687/Pecado_no_pedirse_una_gilda_%EF%B8%8F_aguaducho_bar_camposanfrancisco_oviedo_naturaleza_asturias_akpm5h.jpg",
  "https://res.cloudinary.com/dfbsqy5ul/image/upload/v1778102687/Nuestra_Burger_AGUADUCHO_te_est%C3%A1_esperando_este_San_Mateo_Pan_brioche_doble_carne_de_tern_q3fqxk.jpg",
  "https://res.cloudinary.com/dfbsqy5ul/image/upload/v1778102686/No_te_cortes_lo_est%C3%A1s_deseando_%EF%B8%8F_Campo_San_Francisco_aguaducho_bar_camposanfrancisco_ovi_kkp0as.jpg",
  "https://res.cloudinary.com/dfbsqy5ul/image/upload/v1778102686/El_sol_se_esconde_pero_la_naranjada_sigue_guardando_el_verano_en_el_vaso_Campo_San_Francis_byjeur.jpg",
  "https://res.cloudinary.com/dfbsqy5ul/image/upload/v1778102686/684159953_18082989398617953_2064318348427129906_n._uvf0di.jpg",
  "https://res.cloudinary.com/dfbsqy5ul/image/upload/v1778102686/673117138_18082172804617953_1952573539292701931_n._nw2ozy.jpg"
];

const reviews = [
  { name: "Charito Muchamarcha", text: "Uno de los mejores mojitos que me he tomado en mi vida. Espectacular, con los aromas de la lima, la menta y ron y el azúcar moreno en su justa medida.", time: "Hace 3 años" },
  { name: "Alena Shchepanskaia", text: "Servicio súper rápido, camareros muy atentos, además te ponen tapas pequeñas con las bebidas. Volveremos seguro.", time: "Hace un año" },
  { name: "Natalia Duque", text: "Muy gratamente sorprendidos. Se nota que hay personas con ganas de hacer las cosas bien. Riquísimo todo: nachos, smash burger y pizza.", time: "Hace un año" },
  { name: "Alejandro Macías", text: "Imprescindible en Oviedo, no hay terraza igual. Muy recomendables los nachos, las pizzas y la hamburguesa.", time: "Hace 2 años" },
  { name: "Yesica Herrero", text: "La hamburguesa smash bacon increíble, las copas bien hechas y la atención muy buena. Volveremos.", time: "Hace 11 meses" },
  { name: "Marga Vil", text: "Lugar con mucho encanto. En nuestras vacaciones hemos venido cada día.", time: "Hace 2 años" },
  { name: "Javier R.", text: "Ubicado en un parque precioso. La música ideal, el servicio rápido y atento.", time: "Hace 9 meses" },
  { name: "David Dolibramento", text: "Mucha relajación. Servicio bueno, atento y eficaz. Copas muy bien servidas.", time: "Hace 8 meses" },
  { name: "Dani Cruz", text: "Un sitio de lujo en el corazón de la ciudad rodeado de naturaleza. Parada obligatoria.", time: "Hace un año" },
  { name: "G DF", text: "Ambiente ovetense total, veraniego, con clase y estilo en pleno Campo de San Francisco.", time: "Hace un año" },
  { name: "Noelia López", text: "Un sitio insuperable en Oviedo, en el parque más emblemático de la ciudad.", time: "Hace 2 años" },
  { name: "Andrea Martín", text: "Música que te incita a sentarte y disfrutar. Buen servicio y comida buena y rápida.", time: "Hace 2 años" },
  { name: "MCC CC", text: "Borja y todo el equipo son excepcionales. Siempre pendientes y creando un ambiente ideal.", time: "Hace 2 años" },
  { name: "Lucía García", text: "La atención al cliente no puede ser mejor. El parque hace que estés bastante a gusto.", time: "Hace 9 meses" },
  { name: "Á CFK", text: "Mejor terraza de Oviedo en pleno pulmón de la ciudad. Buen ambiente y staff estupendo.", time: "Hace 2 años" }
];

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollPrev = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollNext = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <div className="relative w-full min-h-[100dvh] lg:h-[100dvh] flex flex-col p-2 lg:p-4 bg-[#3d9e6e] text-white font-sans antialiased overflow-x-hidden selection:bg-white selection:text-[#3d9e6e]">
      <main className="relative z-10 w-full h-full flex flex-col lg:flex-row pb-4 lg:pb-0 mb-4 lg:mb-0 border-[4px] border-white/80 rounded-[32px] overflow-hidden">
        {/* Main large section */}
        <section className="relative w-full lg:w-3/4 h-[600px] lg:h-full overflow-hidden group bg-[#3d9e6e]">
          
          {/* Carousel */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
             <button 
                onClick={prevImage}
                className="absolute -left-12 md:-left-20 lg:-left-24 z-30 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-black/20 border border-white flex items-center justify-center text-white hover:bg-[#2e8b57] transition-all cursor-pointer shadow-sm">
                <ChevronLeft size={20} />
             </button>
             
             <div className="w-[320px] h-[320px] md:w-[480px] md:h-[480px] lg:w-[600px] lg:h-[600px] xl:w-[700px] xl:h-[700px] rounded-full overflow-hidden group-hover:scale-105 transition-transform duration-1000 ease-in-out relative bg-[#2e8b57]">
                {carouselImages.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Carousel item ${idx}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${idx === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                  />
                ))}
             </div>

             <button 
                onClick={nextImage}
                className="absolute -right-12 md:-right-20 lg:-right-24 z-30 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-black/20 border border-white flex items-center justify-center text-white hover:bg-[#2e8b57] transition-all cursor-pointer shadow-sm">
                <ChevronRight size={20} />
             </button>
          </div>
          
          <nav className="absolute top-6 left-6 lg:top-8 lg:left-8 z-20">
            <div className="glass-panel px-8 py-3 lg:py-5 lg:px-12 rounded-full flex items-center shadow-lg">
              <span className="text-4xl md:text-5xl lg:text-5xl font-display font-bold text-primary tracking-[0.2em] uppercase">AGUADUCHO</span>
            </div>
          </nav>

          <div className="absolute bottom-12 left-8 lg:bottom-16 lg:left-16 z-20 max-w-2xl">
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-display text-white leading-[1.1] mb-2 drop-shadow-sm">
              El Corazón del <br/> <span className="text-white">Parque San Francisco</span>
            </h1>
          </div>

          <div className="absolute bottom-12 right-8 lg:right-12 flex space-x-3 z-20">
            <a href="#" className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-black/20 border border-white flex items-center justify-center text-white hover:bg-white hover:text-[#3d9e6e] transition-all group/icon shadow-sm">
              <Instagram size={20} className="lg:w-[22px] lg:h-[22px]" />
            </a>
            <a href="#" className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-black/20 border border-white flex items-center justify-center text-white hover:bg-white hover:text-[#3d9e6e] transition-all group/icon shadow-sm">
              <Facebook size={20} className="lg:w-[22px] lg:h-[22px]" />
            </a>
          </div>
        </section>

        {/* Right side cards */}
        <section className="w-full lg:w-1/4 flex flex-col h-full min-h-[600px] lg:min-h-0 border-l-[4px] border-white/80">
          <Card 
            image="https://res.cloudinary.com/dfbsqy5ul/image/upload/v1778088192/eqweqweqweq_xaheto.jpg"
            label="Carta"
            onClick={() => setActiveCard("Carta")}
            className="border-[4px] border-white/80"
          />
          <Card 
            image="https://res.cloudinary.com/dfbsqy5ul/image/upload/v1778088576/ChatGPT_Image_6_may_2026_19_28_44_zklcxb.png"
            label="Reseñas"
            onClick={() => setActiveCard("Reseñas")}
            className="border-[4px] border-white/80"
          />
          <Card 
            image="https://res.cloudinary.com/dfbsqy5ul/image/upload/v1778088061/AGUADUCHO_Os_esperamos_en_el_Campo_San_Francisco_aguaducho_bar_camposanfrancisco_ov_vqdcg8.jpg"
            label="Donde Estamos"
            onClick={() => setActiveCard("Donde Estamos")}
            className="border-[4px] border-white/80"
          />
        </section>
      </main>

      {activeCard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60">
          <div className={`relative w-full ${activeCard === 'Reseñas' || activeCard === 'Donde Estamos' ? 'max-w-5xl lg:max-w-6xl' : 'max-w-2xl'} bg-[#3d9e6e] border border-white/20 rounded-[32px] p-8 md:p-12 shadow-2xl overflow-y-auto max-h-[95vh]`}>
            <button 
              onClick={() => setActiveCard(null)}
              className="absolute top-6 right-6 text-[#e0f0ee] hover:text-white transition-colors cursor-pointer"
            >
              <X size={24} />
            </button>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6 uppercase tracking-widest">{activeCard}</h2>
            <div className="text-[#e0f0ee] font-sans leading-relaxed text-sm md:text-base">
              {activeCard === 'Carta' && (
                <CartaSection />
              )}
              {activeCard === 'Reseñas' && (
                <div id="resenas" className="w-full">

                  <div className="relative mb-6">
                    <button 
                      onClick={scrollPrev}
                      className="absolute -left-4 md:-left-8 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/20 border border-white/50 flex items-center justify-center text-white hover:bg-[#2e8b57] transition-all cursor-pointer shadow-md hover:scale-105"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    
                    <div 
                      ref={scrollContainerRef}
                      className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                    >
                      {reviews.map((review, idx) => (
                        <div key={idx} className="min-w-[280px] lg:min-w-[340px] snap-center bg-[#2e8b57] border-l-[3px] border-white rounded-[10px] p-5 flex flex-col justify-between whitespace-normal shadow-md">
                          <div>
                            <div className="flex justify-between items-start mb-3">
                              <span className="text-yellow-400 text-xl tracking-[0.2em] leading-none">★★★★★</span>
                              <span className="text-[#EA4335] font-bold font-sans text-xl leading-none" title="Google Review">G</span>
                            </div>
                            <p className="text-white line-clamp-3 text-[15px] italic mb-1">"{review.text}"</p>
                            <button className="text-[#e0f0ee] text-xs font-semibold hover:text-white mb-4 underline decoration-[#e0f0ee]/50 transition-colors cursor-pointer">Leer más</button>
                          </div>
                          <div className="flex items-center space-x-2 text-sm mt-auto">
                            <span className="text-white font-bold border-r border-[#e0f0ee]/50 pr-2">{review.name}</span>
                            <span className="text-[#e0f0ee] text-xs">{review.time}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <button 
                      onClick={scrollNext}
                      className="absolute -right-4 md:-right-8 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/20 border border-white/50 flex items-center justify-center text-white hover:bg-[#2e8b57] transition-all cursor-pointer shadow-md hover:scale-105"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </div>

                  <div className="flex justify-center mt-2">
                    <a 
                      href="https://www.google.es/maps/place/Aguaducho/@43.3622675,-5.8535792,17z/data=!4m8!3m7!1s0xd368d400d17abf7:0xe0ac498790e79b63!8m2!3d43.3622636!4d-5.8510043!9m1!1b1!16s%2Fg%2F11sr9m1g8l?hl=es&entry=ttu&g_ep=EgoyMDI2MDUwMi4wIKXMDSoASAFQAw%3D%3D" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-[#2e8b57] transition-all duration-300 font-bold tracking-widest uppercase text-sm inline-block shadow-sm hover:shadow-md"
                    >
                      DEJA TU RESEÑA EN GOOGLE
                    </a>
                  </div>
                </div>
              )}
              {activeCard === 'Donde Estamos' && (
                <NosotrosSection />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function CartaSection() {
  const [activeTab, setActiveTab] = useState<'comida' | 'bebidas'>('comida');
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const activeImage = activeTab === 'comida' 
    ? 'https://res.cloudinary.com/dfbsqy5ul/image/upload/v1778097220/carta_comida_zvk6ft.jpg' 
    : 'https://res.cloudinary.com/dfbsqy5ul/image/upload/v1778097220/carta_bebida_y3s6fv.jpg';

  const altText = activeTab === 'comida' ? 'Carta Comida Aguaducho' : 'Carta Bebidas Aguaducho';

  return (
    <div id="carta" className="w-full flex flex-col items-center">
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightboxOpen(false)}
        >
          <button 
            className="absolute top-4 right-4 md:top-8 md:right-8 text-white text-3xl md:text-4xl cursor-pointer hover:text-gray-300 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxOpen(false);
            }}
          >
            ✕
          </button>
          <img 
            src={activeImage} 
            alt={altText}
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-[8px]"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setActiveTab('comida')}
          className={`px-6 py-2 rounded-[20px] transition-all duration-300 font-bold uppercase text-sm ${
            activeTab === 'comida'
              ? 'bg-white text-[#3d9e6e] shadow-md'
              : 'bg-transparent border border-white text-white hover:bg-[#2e8b57] hover:border-[#2e8b57]'
          }`}
        >
          COMIDA
        </button>
        <button
          onClick={() => setActiveTab('bebidas')}
          className={`px-6 py-2 rounded-[20px] transition-all duration-300 font-bold uppercase text-sm ${
            activeTab === 'bebidas'
              ? 'bg-white text-[#3d9e6e] shadow-md'
              : 'bg-transparent border border-white text-white hover:bg-[#2e8b57] hover:border-[#2e8b57]'
          }`}
        >
          BEBIDAS
        </button>
      </div>

      <img 
        src={activeImage} 
        alt={altText} 
        className="w-full rounded-[8px] object-contain max-h-[70vh] shadow-xl transition-opacity duration-300 cursor-pointer hover:opacity-90" 
        onClick={() => setLightboxOpen(true)}
      />
      
      <p className="text-[#e0f0ee] text-xs md:text-sm mt-4 text-center tracking-wide">
        Consulta disponibilidad estacional · Carta sujeta a cambios
      </p>
    </div>
  );
}

function NosotrosSection() {
  const currentDayInfo = new Date();
  const currentDay = currentDayInfo.getDay();
  const currentHour = currentDayInfo.getHours();

  let isOpen = false;
  const scheduleDates = [
    { d: 3, n: 'Miércoles', h: '12:00 – 23:00', open: 12, close: 23 },
    { d: 4, n: 'Jueves', h: '12:00 – 23:00', open: 12, close: 23 },
    { d: 5, n: 'Viernes', h: '12:00 – 00:00', open: 12, close: 24 },
    { d: 6, n: 'Sábado', h: '12:00 – 00:00', open: 12, close: 24 },
    { d: 0, n: 'Domingo', h: '12:00 – 22:00', open: 12, close: 22 },
    { d: 1, n: 'Lunes', h: 'Cerrado', open: 0, close: 0 },
    { d: 2, n: 'Martes', h: 'Cerrado', open: 0, close: 0 }
  ];

  const todaySchedule = scheduleDates.find(s => s.d === currentDay);
  if (todaySchedule && todaySchedule.open !== 0) {
    if (currentHour >= todaySchedule.open && currentHour < todaySchedule.close) {
      isOpen = true;
    }
  }

  return (
    <div id="nosotros" className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left w-full mt-4">
      <div>
         <h3 className="text-3xl font-display text-white mb-1">NUESTRO LOCAL</h3>
         <p className="text-[#e0f0ee] text-lg mb-4">En el corazón de Oviedo</p>
         
         <p className="text-[#e0f0ee] mb-6 leading-relaxed">
           Aguaducho nació para darle vida al rincón más querido de Oviedo. 
           Situados en pleno Parque San Francisco, te ofrecemos un espacio único 
           donde disfrutar de buenas bebidas, coctelería artesanal y una cocina 
           honesta rodeados de naturaleza.
         </p>
         
         <div className="mb-8">
           <div className="flex items-center gap-2 mb-4">
              <span className="text-white text-xl">🕐</span>
              <span className="font-bold text-lg text-white">Horarios</span>
              <span className={`ml-3 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${isOpen ? 'bg-white/20 text-white' : 'bg-red-500/80 text-white'}`}>
                {isOpen ? 'Abierto ahora' : 'Cerrado'}
              </span>
           </div>
           
           <ul className="space-y-[2px]">
             {scheduleDates.map((item) => (
                <li key={item.n} className={`flex justify-between px-3 py-2 rounded-md ${currentDay === item.d ? 'bg-white/20 text-white font-semibold' : 'text-[#e0f0ee]'}`}>
                  <span>{item.n}</span>
                  <span>{item.h}</span>
                </li>
             ))}
           </ul>
         </div>

         <a href="tel:+34613109868" className="inline-flex items-center justify-center bg-white text-[#3d9e6e] font-bold px-8 py-3.5 rounded-[25px] hover:bg-[#2e8b57] hover:text-white transition-colors w-full sm:w-auto shadow-md hover:shadow-lg">
           📞 Llamar: 613 10 98 68
         </a>
      </div>

      <div className="h-[300px] lg:h-auto lg:min-h-[400px]">
         <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2910.123!2d-5.8532!3d43.3623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd368d400d17abf7%3A0xe0ac498790e79b63!2sAguaducho!5e0!3m2!1ses!2ses!4v1234567890" 
            width="100%" 
            height="100%" 
            style={{ border: 0, borderRadius: '12px', filter: 'grayscale(30%) hue-rotate(60deg)' }}
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
         />
      </div>
    </div>
  );
}

function Card({ image, label, onClick, className }: { image: string; label: string; onClick: () => void; className?: string }) {
  return (
    <button onClick={onClick} className={`group relative flex-1 basis-1/3 min-h-[200px] lg:min-h-0 overflow-hidden bg-[#3d9e6e] flex items-end p-6 cursor-pointer text-left w-full block ${className || ''}`}>
      <img 
        src={image} 
        alt={label} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 transition-opacity duration-500 group-hover:opacity-80"></div>
      
      <div className="relative w-full flex justify-end items-center space-x-3 text-white transition-transform duration-500 group-hover:-translate-y-1">
        <span className="text-[11px] font-bold tracking-[0.15em] uppercase drop-shadow-md">{label}</span>
        <div className="border border-white rounded-full p-1 border-opacity-80 group-hover:bg-white group-hover:text-[#3d9e6e] transition-colors">
          <ArrowRight size={14} className="stroke-[1.5]" />
        </div>
      </div>
    </button>
  );
}
