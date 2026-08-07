import { motion } from 'motion/react';
import { useState } from 'react';
import { Filter, ExternalLink } from 'lucide-react';
import { SITE } from '../site';

const base = import.meta.env.BASE_URL;

/** College-submitted photography in `public/gallery/`. More albums: SITE.facebookPhotosUrl */
const galleryItems = [
  {
    id: 1,
    category: 'Campus',
    image: `${base}gallery/gallery-01.png`,
    title: 'Staff and students with campus greenery',
    imgClass: 'object-cover object-center',
  },
  {
    id: 2,
    category: 'Events',
    image: `${base}gallery/gallery-02.png`,
    title: 'Daily Aaj - Mushaira coverage (Radio Pakistan)',
    imgClass: 'object-contain bg-slate-100',
  },
  {
    id: 3,
    category: 'Academics',
    image: `${base}gallery/gallery-03.png`,
    title: 'Pakistan Studies Research Journal launch',
    imgClass: 'object-cover object-center',
  },
  {
    id: 4,
    category: 'Events',
    image: `${base}gallery/gallery-04.png`,
    title: 'Urdu Department - Halqa-e-Ahl-e-Qalam (library session)',
    imgClass: 'object-contain bg-slate-900/90',
  },
  {
    id: 5,
    category: 'Events',
    image: `${base}gallery/gallery-05.png`,
    title: 'Annual Mushaira poster (KMU, Peshawar)',
    imgClass: 'object-contain bg-amber-50',
  },
  {
    id: 6,
    category: 'Academics',
    image: `${base}gallery/gallery-06.png`,
    title: 'College leadership - principal office',
    imgClass: 'object-cover object-[center_35%]',
  },
  {
    id: 7,
    category: 'Campus',
    image: `${base}gallery/gallery-07.png`,
    title: 'Tree-planting on campus',
    imgClass: 'object-cover object-center',
  },
  {
    id: 8,
    category: 'Events',
    image: `${base}gallery/gallery-08.png`,
    title: 'Teacher iftar in Ramadan',
    imgClass: 'object-cover object-center',
  },
  {
    id: 9,
    category: 'Academics',
    image: `${base}gallery/gallery-09.png`,
    title: 'Students in class and examinations',
    imgClass: 'object-cover object-[center_40%]',
  },
  {
    id: 10,
    category: 'Academics',
    image: `${base}gallery/gallery-10.png`,
    title: 'Faculty group at the main campus block',
    imgClass: 'object-cover object-center',
  },
] as const;

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Campus', 'Academics', 'Events'];

  const filteredItems = filter === 'All' ? galleryItems : galleryItems.filter((item) => item.category === filter);

  return (
    <div className="flex flex-col">
      <section className="py-14 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-academy-gold font-bold tracking-widest uppercase text-xs mb-4 block">Visual stories</span>
          <h1 className="text-5xl md:text-7xl font-bold text-academy-green mb-8 leading-tight max-w-4xl">
            Campus life at <span className="text-academy-gold">{SITE.shortName}</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mb-6">
            Gallery photographs are from college activities, classes, and events. For full albums and day-to-day updates, browse the
            official Facebook photos tab.
          </p>
          <a
            href={SITE.facebookPhotosUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-bold text-academy-green hover:text-academy-gold transition-colors"
          >
            Open Facebook photos <ExternalLink size={18} />
          </a>
        </div>
      </section>

      <section className="pb-12 bg-white sticky top-20 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-6 overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-2 text-slate-400 font-bold uppercase text-[10px] tracking-widest shrink-0">
              <Filter size={14} /> Filter
            </div>
            <div className="flex gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2.5 rounded-full font-bold text-xs transition-all shrink-0 ${
                    filter === cat ? 'bg-academy-green text-white shadow-md' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                key={item.id}
                className="group relative aspect-square rounded-3xl overflow-hidden shadow-lg hover-lift cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full h-full transition-all duration-700 group-hover:scale-110 ${item.imgClass}`}
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-academy-green/90 via-academy-green/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 transform translate-y-4 group-hover:translate-y-0">
                  <span className="text-academy-gold-light text-xs font-bold uppercase tracking-widest mb-2">{item.category}</span>
                  <h3 className="text-white text-2xl font-bold">{item.title}</h3>
                  <div className="w-12 h-1 bg-academy-gold mt-4 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 delay-100" />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center space-y-4">
            <a
              href={SITE.facebookPhotosUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-academy-green text-white px-10 py-4 rounded-2xl font-bold inline-flex items-center gap-2 hover:bg-academy-green-dark transition-colors"
            >
              More photos on Facebook <ExternalLink size={18} />
            </a>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">
              Showing {filteredItems.length} of {galleryItems.length} gallery images
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-academy-green mb-4">Share your moments</h2>
              <p className="text-slate-500">
                Student societies and sports teams regularly tag the college Facebook page. If you manage communications for GSSC,
                keep albums organised by session so visitors can browse everything in one place.
              </p>
            </div>
            <div className="flex">
              <input
                type="email"
                readOnly
                placeholder="Subscribe via Facebook notifications"
                className="bg-white border border-slate-200 rounded-l-xl px-6 py-4 text-sm w-full text-slate-400"
              />
              <a
                href={SITE.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-academy-green-dark text-white px-8 py-4 rounded-r-xl text-sm font-bold hover:bg-black transition-colors whitespace-nowrap flex items-center"
              >
                Follow
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
