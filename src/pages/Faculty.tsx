import { motion } from 'motion/react';
import { BookOpen, Microscope, Leaf, Users, Landmark, FlaskConical, Globe2 } from 'lucide-react';
import { SITE } from '../site';

const departments = [
  {
    name: 'Faculty of Physical Sciences',
    blurb: 'Physics, chemistry, mathematics, and computer science programmes supporting FSc and BS pathways.',
    icon: <FlaskConical size={28} />,
  },
  {
    name: 'Faculty of Biological Sciences',
    blurb: 'Botany and zoology departments delivering laboratory-intensive courses for medical and life-science careers.',
    icon: <Leaf size={28} />,
  },
  {
    name: 'Faculty of Social Sciences & Humanities',
    blurb: 'Economics, Pakistan studies, English, and allied disciplines for FA, BA, and BS students.',
    icon: <Globe2 size={28} />,
  },
  {
    name: 'College administration',
    blurb: 'Principal office, registrar, accounts, and student affairs teams coordinating academics and examinations.',
    icon: <Landmark size={28} />,
  },
  {
    name: 'Libraries & learning resources',
    blurb: 'Reading rooms, digital access points, and departmental seminars supporting board and university curricula.',
    icon: <BookOpen size={28} />,
  },
  {
    name: 'Laboratories & ICT',
    blurb: 'Science laboratories and computing facilities aligned with BISE and University of Peshawar practical requirements.',
    icon: <Microscope size={28} />,
  },
];

export default function Faculty() {
  return (
    <div className="flex flex-col">
      <section className="py-14 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-academy-gold font-bold tracking-widest uppercase text-xs mb-4 block">Academic structure</span>
          <h1 className="text-5xl md:text-7xl font-bold text-academy-green mb-8 leading-tight max-w-4xl">
            Departments & <span className="text-academy-gold">faculties</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
            {SITE.fullName} is organised into faculties that cover intermediate, undergraduate, and BS programmes. Individual faculty
            rosters change with postings; refer to college notice boards or the KP HED profile for the latest sanctioned strength.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {departments.map((dept) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                key={dept.name}
                className="bg-slate-50 border border-slate-100 rounded-3xl p-10 hover-lift hover-glow group cursor-default"
              >
                <div className="w-14 h-14 rounded-2xl bg-white shadow flex items-center justify-center text-academy-green mb-6 group-hover:bg-academy-green group-hover:text-white transition-colors">
                  {dept.icon}
                </div>
                <h3 className="text-xl font-bold text-academy-green mb-3 group-hover:text-academy-gold transition-colors">{dept.name}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{dept.blurb}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-xl border border-slate-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <span className="text-academy-gold font-bold tracking-widest uppercase text-xs mb-4 block">Teaching culture</span>
                <h2 className="text-4xl font-bold text-academy-green mb-8 leading-tight">Mentorship in a public college setting</h2>
                <p className="text-slate-600 leading-relaxed mb-10">
                  Faculty members combine classroom instruction with practical demonstrations, board-exam coaching, and research
                  awareness for BS students. Professional development workshops are arranged in line with Higher Education Department
                  guidelines.
                </p>
                <div className="flex gap-12">
                  <div>
                    <div className="text-4xl font-serif font-bold text-academy-green">1962</div>
                    <div className="text-slate-400 text-xs uppercase tracking-widest font-bold">Serving generations</div>
                  </div>
                  <div>
                    <div className="text-4xl font-serif font-bold text-academy-green">UoP</div>
                    <div className="text-slate-400 text-xs uppercase tracking-widest font-bold">Affiliated degrees</div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 flex gap-6 items-start hover-lift hover-glow group cursor-default">
                  <div className="bg-academy-gold/10 p-4 rounded-2xl group-hover:bg-academy-gold group-hover:text-white transition-all duration-500 group-hover:rotate-12">
                    <BookOpen className="text-academy-gold group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-academy-green mb-2 group-hover:text-academy-gold transition-colors">Research exposure</h3>
                    <p className="text-slate-500 text-sm">Senior faculty mentor BS students in literature review, field work, and lab safety.</p>
                  </div>
                </div>
                <div className="bg-academy-green p-10 rounded-3xl text-white flex gap-6 items-start hover-lift hover-glow group cursor-default">
                  <div className="bg-white/20 p-4 rounded-2xl group-hover:bg-academy-gold transition-all duration-500 group-hover:-rotate-12">
                    <Users className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2 group-hover:text-academy-gold-light transition-colors">Student advisement</h3>
                    <p className="text-academy-cream/70 text-sm">Co-curricular advisers help students balance societies, sports, and academics.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-16 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-academy-green mb-6">Meet educators on Facebook</h2>
          <p className="text-slate-500 mb-10">
            Event albums often introduce guest speakers, departmental heads, and student achievers. Follow the official page for
            authentic imagery and captions.
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
    </div>
  );
}
