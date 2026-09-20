import { useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import {
  Atom,
  BookOpen,
  Building2,
  FlaskConical,
  Landmark,
  Leaf,
  Microscope,
  Users,
} from 'lucide-react';
import {
  DEPARTMENTS,
  FACULTY_CATEGORIES,
  type Department,
  type FacultyCategory,
} from '../data/facultyData';
import { SITE } from '../site';

const categoryIcons: Record<FacultyCategory, ReactNode> = {
  'Physical Sciences': <Atom size={18} />,
  'Biological Sciences': <Leaf size={18} />,
  'Social Sciences & Humanities': <BookOpen size={18} />,
  'Support Services': <Building2 size={18} />,
};

const supportCards = [
  {
    name: 'College Administration',
    overview:
      'Principal office, registrar, accounts, and student affairs teams coordinating academics, examinations, and campus operations.',
    programs: ['Principal Office', 'Student Affairs', 'Accounts & Examinations'],
    icon: <Landmark size={22} />,
  },
  {
    name: 'Libraries & Learning Resources',
    overview:
      'Reading rooms, digital access points, and departmental seminars supporting board and university curricula.',
    programs: ['Central Library', 'Reading Rooms', 'Seminar Support'],
    icon: <BookOpen size={22} />,
  },
  {
    name: 'Laboratories & ICT Infrastructure',
    overview:
      'Science laboratories and computing facilities aligned with BISE and University of Peshawar practical requirements.',
    programs: ['Science Labs', 'Computer Labs', 'ICT Support'],
    icon: <Microscope size={22} />,
  },
];

function DepartmentCard({ dept }: { dept: Department }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35 }}
      className="bg-white border border-slate-100 rounded-[2.5rem] p-8 md:p-10 shadow-sm hover-lift hover-glow flex flex-col"
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="w-11 h-11 rounded-2xl bg-slate-50 flex items-center justify-center text-academy-green">
          {categoryIcons[dept.facultyCategory]}
        </div>
        <span className="text-xs font-bold uppercase tracking-widest text-academy-gold bg-academy-gold/10 px-3 py-1.5 rounded-full">
          {dept.facultyCategory}
        </span>
      </div>
      <h3 className="text-2xl font-bold text-academy-green mb-4">{dept.name}</h3>
      <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">{dept.overview}</p>
      <div className="flex flex-wrap gap-2 mb-8">
        {dept.programs.map((program) => (
          <span
            key={program}
            className="text-xs font-medium bg-slate-50 text-slate-600 px-3 py-1.5 rounded-xl border border-slate-100"
          >
            {program}
          </span>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-6 border-t border-slate-100">
        <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
          Verified Academic Roster
        </span>
        <Link
          to={`/departments/${dept.id}/faculty`}
          className="btn-primary text-sm px-5 py-2.5 inline-flex items-center justify-center gap-2"
        >
          <Users size={16} />
          Faculty Members
        </Link>
      </div>
    </motion.article>
  );
}

export default function Faculty() {
  const [activeCategory, setActiveCategory] = useState<FacultyCategory>('Physical Sciences');

  const filtered = DEPARTMENTS.filter((d) => d.facultyCategory === activeCategory);
  const showSupportExtras = activeCategory === 'Support Services';

  return (
    <div className="flex flex-col">
      <section className="py-14 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-academy-gold font-bold tracking-widest uppercase text-xs mb-4 block">
            Academic structure
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-academy-green mb-8 leading-tight max-w-4xl">
            Departments & <span className="text-academy-gold">faculties</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
            Explore academic departments at {SITE.fullName} and meet the teaching staff who deliver intermediate,
            degree, and BS programmes affiliated with the University of Peshawar.
          </p>
        </div>
      </section>

      <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-sm border-y border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-thin">
            {FACULTY_CATEGORIES.map((cat) => {
              const active = activeCategory === cat;
              const label = cat === 'Support Services' ? 'Support & Services' : cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${
                    active
                      ? 'bg-academy-green text-white shadow-md'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {categoryIcons[cat]}
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <section className="py-12 md:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {filtered.map((dept) => (
                <div key={dept.id}>
                  <DepartmentCard dept={dept} />
                </div>
              ))}

              {showSupportExtras &&
                supportCards.map((card) => (
                  <motion.article
                    layout
                    key={card.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white border border-slate-100 rounded-[2.5rem] p-8 md:p-10 shadow-sm hover-lift hover-glow flex flex-col"
                  >
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-11 h-11 rounded-2xl bg-slate-50 flex items-center justify-center text-academy-green">
                        {card.icon}
                      </div>
                      <span className="text-xs font-bold uppercase tracking-widest text-academy-gold bg-academy-gold/10 px-3 py-1.5 rounded-full">
                        Support Services
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-academy-green mb-4">{card.name}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">{card.overview}</p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {card.programs.map((program) => (
                        <span
                          key={program}
                          className="text-xs font-medium bg-slate-50 text-slate-600 px-3 py-1.5 rounded-xl border border-slate-100"
                        >
                          {program}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-6 border-t border-slate-100">
                      <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                        Campus Support
                      </span>
                      <Link
                        to="/contact"
                        className="btn-primary text-sm px-5 py-2.5 inline-flex items-center justify-center"
                      >
                        Contact Office
                      </Link>
                    </div>
                  </motion.article>
                ))}

              {filtered.length === 0 && !showSupportExtras && (
                <div className="lg:col-span-2 text-center py-16 text-slate-500">
                  No departments listed in this category yet.
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section className="py-14 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-[3rem] p-12 md:p-20 border border-slate-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <span className="text-academy-gold font-bold tracking-widest uppercase text-xs mb-4 block">
                  Teaching culture
                </span>
                <h2 className="text-4xl font-bold text-academy-green mb-8 leading-tight">
                  Mentorship in a public college setting
                </h2>
                <p className="text-slate-600 leading-relaxed mb-10">
                  Faculty members combine classroom instruction with practical demonstrations, board-exam coaching,
                  and research awareness for BS students. Professional development workshops follow Higher Education
                  Department guidelines.
                </p>
                <div className="flex gap-12">
                  <div>
                    <div className="text-4xl font-serif font-bold text-academy-green">{SITE.established}</div>
                    <div className="text-slate-400 text-xs uppercase tracking-widest font-bold">Serving generations</div>
                  </div>
                  <div>
                    <div className="text-4xl font-serif font-bold text-academy-green">UoP</div>
                    <div className="text-slate-400 text-xs uppercase tracking-widest font-bold">Affiliated degrees</div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white p-10 rounded-3xl border border-slate-100 flex gap-6 items-start hover-lift group">
                  <div className="bg-academy-gold/10 p-4 rounded-2xl group-hover:bg-academy-gold group-hover:text-white transition-all duration-500">
                    <FlaskConical className="text-academy-gold group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-academy-green mb-2">Research exposure</h3>
                    <p className="text-slate-500 text-sm">
                      Senior faculty mentor BS students in literature review, field work, and lab safety.
                    </p>
                  </div>
                </div>
                <div className="bg-academy-green p-10 rounded-3xl text-white flex gap-6 items-start hover-lift group">
                  <div className="bg-white/20 p-4 rounded-2xl group-hover:bg-academy-gold transition-all duration-500">
                    <Users className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Student advisement</h3>
                    <p className="text-academy-cream/70 text-sm">
                      Co-curricular advisers help students balance societies, sports, and academics.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {SITE.facebookUrl && (
        <section className="py-14 md:py-16 bg-slate-50 text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-academy-green mb-6">Meet educators on Facebook</h2>
            <p className="text-slate-500 mb-10">
              Event albums often introduce guest speakers, departmental heads, and student achievers. Follow the
              official page for authentic imagery and captions.
            </p>
            <a
              href={SITE.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-10 py-4 inline-flex items-center justify-center gap-2"
            >
              Go to Facebook page
            </a>
          </div>
        </section>
      )}
    </div>
  );
}
