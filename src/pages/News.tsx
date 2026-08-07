import { motion } from 'motion/react';
import { Bell, Calendar, FileText, ChevronRight, Download, ExternalLink } from 'lucide-react';
import { SITE } from '../site';

const base = import.meta.env.BASE_URL;

/** Official notices and press clippings — images in `public/news/`. Verify dates with the college office. */
const newsItems = [
  {
    category: 'Press',
    date: '12 May 2026',
    title: 'Daily Mashriq: Mushaira on Operation Bunyan al-Marsous',
    desc: 'Press coverage of a Mushaira organised by Radio Pakistan Peshawar, with poetic tributes and participation by leading poets from KP and beyond.',
    link: 'College Facebook',
    href: SITE.facebookUrl,
    external: true,
    image: `${base}news/news-02.png`,
  },
  {
    category: 'Press',
    date: '11 May 2026',
    title: 'Daily Aeen: All Pakistan commemorative Mushaira',
    desc: 'Newspaper report on the Radio Pakistan Mushaira marking Operation Bunyan-ul-Marsous, with guests including poets from Khyber Pakhtunkhwa.',
    link: 'College Facebook',
    href: SITE.facebookUrl,
    external: true,
    image: `${base}news/news-01.png`,
  },
  {
    category: 'Notices',
    date: 'Principal notice',
    title: 'Important: exam reporting for B-Hall (Jamal) candidates',
    desc: 'First- and second-year students assigned to B-Hall at Jamal School/College should report to Government Superior Science College Peshawar at 8:00 AM as stated on the principal’s circular.',
    link: 'College Facebook',
    href: SITE.facebookUrl,
    external: true,
    image: `${base}news/news-03.png`,
  },
  {
    category: 'Academics',
    date: 'From 31 Mar 2026',
    title: 'BS classes: regular timetable and online Fridays & Saturdays',
    desc: 'Students who have completed BS semester exams are informed that regular on-campus classes begin 31 March 2026, with attendance required. Friday and Saturday classes are scheduled online.',
    link: 'College Facebook',
    href: SITE.facebookUrl,
    external: true,
    image: `${base}news/news-05.png`,
  },
  {
    category: 'Scholarships',
    date: 'Deadline 23 Apr 2026',
    title: 'Orphan scholarship: submit documents in time',
    desc: 'First- and second-year orphan students should submit applications to Junior Clerk Asghar by 23 April 2026. Father’s death certificate and DMC are mandatory.',
    link: 'Contact the office',
    href: '#/contact',
    external: false,
    image: `${base}news/news-04.png`,
  },
  {
    category: 'Press',
    date: 'Media',
    title: 'Daily Qaumi Safir: BS Zoology final thesis defences',
    desc: 'Coverage of successful final thesis and viva examinations for BS Zoology students, as published in the press.',
    link: 'College Facebook',
    href: SITE.facebookUrl,
    external: true,
    image: `${base}news/news-06.png`,
  },
  {
    category: 'Examinations',
    date: 'Feb 2026',
    title: 'Intermediate pre-board examinations (morning & 2nd shift)',
    desc: 'Pre-board examinations begin 21 February 2026 using board-pattern, SLO-based papers. Attendance is compulsory; Rs. 500 fine per absent paper. Regular classes continue after pre-board for revision.',
    link: 'College Facebook',
    href: SITE.facebookUrl,
    external: true,
    image: `${base}news/news-07.png`,
  },
  {
    category: 'Examinations',
    date: '21–28 Feb 2026',
    title: 'Pre-board date sheet and examination halls',
    desc: 'Subject-wise timetable for 1st and 2nd year through 28 February 2026, with hall assignments (e.g. Pre-Medical Hall A - 329 students). See the notice image for full detail.',
    link: 'College Facebook',
    href: SITE.facebookUrl,
    external: true,
    image: `${base}news/news-08.png`,
  },
  {
    category: 'Examinations',
    date: '9–14 Feb 2026',
    title: 'Board annual examination fees (2nd shift)',
    desc: 'Submit fees to Accountant Arshad Iqbal between 9 and 14 February 2026. Late fee Rs. 500 after the deadline. 1st year Rs. 2,875; 2nd year Rs. 3,105; improvement Rs. 2,800 in addition, per board rules.',
    link: 'College Facebook',
    href: SITE.facebookUrl,
    external: true,
    image: `${base}news/news-09.png`,
  },
  {
    category: 'Research',
    date: 'Publication',
    title: 'Faculty research: Coprinus comatus in diabetic models',
    desc: 'Hikmat Ullah Jan (Department of Botany, GSSC Peshawar) co-authored a study in the Journal of Population Therapeutics & Clinical Pharmacology on antidiabetic and antioxidant potential (DOI 10.53555/jptcp.v30i19.3628).',
    link: 'Open journal (DOI)',
    href: 'https://doi.org/10.53555/jptcp.v30i19.3628',
    external: true,
    image: `${base}news/news-10.png`,
  },
];

export default function News() {
  return (
    <div className="flex flex-col">
      <section className="py-14 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-academy-green mb-6">News & updates</h1>
          <p className="text-xl text-slate-500 max-w-2xl leading-relaxed">
            Official notices, examination circulars, and press coverage, shown here as published. Always confirm dates and procedures
            with the college office, Facebook page, and KP HED / board notices.
          </p>
        </div>
      </section>

      <section className="pb-14 md:pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {newsItems.map((item, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  key={idx}
                  className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100 flex flex-col md:flex-row group hover-lift hover-glow transition-all duration-500"
                >
                  <div className="md:w-2/5 aspect-[4/3] md:aspect-auto md:min-h-[220px] overflow-hidden relative bg-slate-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-[1.03]"
                      loading={idx < 3 ? 'eager' : 'lazy'}
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-academy-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </div>
                  <div className="md:w-3/5 p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-academy-green/10 text-academy-green text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest group-hover:bg-academy-gold group-hover:text-white transition-colors duration-300">
                        {item.category}
                      </span>
                      <span className="text-slate-400 text-xs font-medium">{item.date}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-academy-green mb-4 leading-tight group-hover:text-academy-gold transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-4">{item.desc}</p>
                    <a
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-2 text-academy-green font-bold text-sm hover:gap-3 transition-all group/btn w-fit"
                    >
                      {item.link}
                      {item.external ? <ExternalLink size={16} /> : <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />}
                    </a>
                  </div>
                </motion.div>
              ))}

              <p className="text-center text-slate-400 text-xs font-bold uppercase tracking-widest pt-4">
                {newsItems.length} items - newest press items listed first
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-academy-gold/10 p-10 rounded-[2.5rem] border border-academy-gold/20 relative overflow-hidden hover-glow transition-all duration-500 group cursor-pointer">
                <div className="absolute -top-4 -right-4 text-academy-gold/10 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-700">
                  <Bell size={120} />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 text-academy-gold mb-6">
                    <Bell size={20} className="animate-bounce" />
                    <span className="text-xs font-bold uppercase tracking-widest">Reminder</span>
                  </div>
                  <h3 className="text-2xl font-bold text-academy-green mb-4 group-hover:text-academy-gold transition-colors">
                    Verify contact details in person
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-8">
                    Phone numbers and office timings on third-party websites can become outdated. Confirm with the college clerk
                    during your visit.
                  </p>
                  <a href={`tel:${SITE.phone.replace(/-/g, '')}`} className="text-academy-green font-bold text-sm underline underline-offset-4 hover:text-academy-gold transition-colors">
                    Call {SITE.phone}
                  </a>
                </div>
              </div>

              <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100">
                <div className="flex items-center gap-3 text-academy-green mb-8">
                  <Calendar size={20} />
                  <h3 className="font-bold uppercase tracking-widest text-xs">National holidays</h3>
                </div>
                <div className="space-y-6">
                  {[
                    { name: 'Eid-ul-Fitr / Eid-ul-Adha', date: 'Per lunar calendar', day: 'Varies', type: 'Religious holidays' },
                    { name: 'Independence Day', date: 'Aug 14', day: 'Thursday', type: 'Public holiday' },
                    { name: 'Iqbal Day', date: 'Nov 09', day: 'Sunday', type: 'Observance' },
                  ].map((holiday, hidx) => (
                    <div key={hidx} className="flex justify-between items-start group cursor-default">
                      <div>
                        <p className="font-bold text-slate-800 group-hover:text-academy-green transition-colors">{holiday.name}</p>
                        <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">{holiday.type}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-academy-gold">{holiday.date}</p>
                        <p className="text-[10px] text-slate-400">{holiday.day}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-slate-400 mt-6">2026 weekday labels are illustrative.</p>
              </div>

              <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
                <div className="flex items-center gap-3 text-academy-green mb-8">
                  <FileText size={20} />
                  <h3 className="font-bold uppercase tracking-widest text-xs">Official resources</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { name: 'HED admission portal', href: SITE.hedAdmissionUrl },
                    { name: 'HED college profile', href: SITE.hedCollegeUrl },
                    { name: 'Wikipedia article', href: SITE.wikipediaUrl },
                  ].map((file) => (
                    <a
                      key={file.name}
                      href={file.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center gap-4 p-4 rounded-2xl border border-slate-50 hover:border-academy-gold/30 hover:bg-slate-50 transition-all group text-left"
                    >
                      <div className="bg-slate-100 p-3 rounded-xl group-hover:bg-academy-gold/10 transition-colors">
                        <Download size={18} className="text-slate-400 group-hover:text-academy-gold" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-700 group-hover:text-academy-green transition-colors">{file.name}</p>
                        <p className="text-[10px] text-slate-400 uppercase font-bold">External link</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
