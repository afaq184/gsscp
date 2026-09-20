import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  BookOpen,
  ExternalLink,
  GraduationCap,
  Mail,
  MapPin,
} from 'lucide-react';
import { getDepartmentById, getFacultyById } from '../data/facultyData';

export default function FacultyProfile() {
  const { memberId } = useParams<{ memberId: string }>();
  const member = memberId ? getFacultyById(memberId) : undefined;
  const [imgFailed, setImgFailed] = useState(false);

  if (!member) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-3xl font-bold text-academy-green mb-4">Faculty Member Not Found</h1>
        <p className="text-slate-500 mb-8">This profile is not available in the academic roster.</p>
        <Link to="/faculty" className="btn-primary inline-flex items-center gap-2">
          <ArrowLeft size={16} /> Back to Departments
        </Link>
      </div>
    );
  }

  const department = getDepartmentById(member.deptId);
  const showPhoto = Boolean(member.photo) && !imgFailed;

  return (
    <div className="bg-slate-50 min-h-[70vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <nav className="flex flex-wrap items-center gap-2 text-sm text-slate-500 mb-8">
          <Link to="/" className="hover:text-academy-green">
            Home
          </Link>
          <span>/</span>
          <Link to="/faculty" className="hover:text-academy-green">
            Departments
          </Link>
          {department && (
            <>
              <span>/</span>
              <Link to={`/departments/${department.id}/faculty`} className="hover:text-academy-green">
                {department.name}
              </Link>
            </>
          )}
          <span>/</span>
          <span className="text-academy-green font-medium">{member.name}</span>
        </nav>

        <div className="flex flex-wrap gap-4 mb-10">
          {department && (
            <Link
              to={`/departments/${department.id}/faculty`}
              className="inline-flex items-center gap-2 text-sm font-bold text-academy-green hover:text-academy-gold"
            >
              <ArrowLeft size={16} />
              Back to {department.name} roster
            </Link>
          )}
          <Link to="/faculty" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-academy-green">
            All departments
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Left column */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-28 lg:self-start">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden"
            >
              <div className="aspect-[3/4] bg-slate-100">
                {showPhoto ? (
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                    onError={() => setImgFailed(true)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
                    <GraduationCap size={56} className="text-slate-300" />
                  </div>
                )}
              </div>
              <div className="p-6">
                <h1 className="text-2xl font-bold text-academy-green mb-2">{member.name}</h1>
                <p className="text-academy-gold font-semibold mb-4">{member.designation}</p>
                {department && (
                  <Link
                    to={`/departments/${department.id}/faculty`}
                    className="inline-flex text-xs font-bold uppercase tracking-widest bg-academy-green/10 text-academy-green px-3 py-1.5 rounded-full hover:bg-academy-green hover:text-white transition-colors"
                  >
                    {department.name}
                  </Link>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-[2rem] border border-slate-100 shadow-sm p-6 space-y-5"
            >
              <h2 className="text-lg font-bold text-academy-green">Contact</h2>
              {member.email && (
                <a
                  href={`mailto:${member.email}`}
                  className="flex items-start gap-3 text-sm text-slate-600 hover:text-academy-green"
                >
                  <Mail size={18} className="text-academy-gold shrink-0 mt-0.5" />
                  <span className="break-all">{member.email}</span>
                </a>
              )}
              {member.contactInfo && (
                <div className="flex items-start gap-3 text-sm text-slate-600">
                  <MapPin size={18} className="text-academy-gold shrink-0 mt-0.5" />
                  <span>{member.contactInfo}</span>
                </div>
              )}
              <div className="flex flex-col gap-3 pt-2">
                {member.googleScholar && (
                  <a
                    href={member.googleScholar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 btn-primary text-sm py-2.5"
                  >
                    Google Scholar <ExternalLink size={14} />
                  </a>
                )}
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-bold text-academy-green hover:border-academy-green transition-colors"
                  >
                    LinkedIn <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </motion.div>
          </aside>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="lg:col-span-8 space-y-6"
          >
            <section className="bg-white rounded-[2rem] border border-slate-100 shadow-sm p-8 md:p-10">
              <div className="flex items-center gap-3 mb-5">
                <BookOpen className="text-academy-gold" size={22} />
                <h2 className="text-2xl font-bold text-academy-green">Biography</h2>
              </div>
              <p className="text-slate-600 leading-relaxed">{member.biography}</p>
            </section>

            <section className="bg-white rounded-[2rem] border border-slate-100 shadow-sm p-8 md:p-10">
              <div className="flex items-center gap-3 mb-5">
                <GraduationCap className="text-academy-gold" size={22} />
                <h2 className="text-2xl font-bold text-academy-green">Qualifications</h2>
              </div>
              <p className="text-slate-700 font-medium">{member.qualification}</p>
              {member.specialization && (
                <p className="text-slate-500 text-sm mt-3">Specialization: {member.specialization}</p>
              )}
            </section>

            {member.researchInterests.length > 0 && (
              <section className="bg-white rounded-[2rem] border border-slate-100 shadow-sm p-8 md:p-10">
                <h2 className="text-2xl font-bold text-academy-green mb-5">Research Interests</h2>
                <div className="flex flex-wrap gap-2">
                  {member.researchInterests.map((interest) => (
                    <span
                      key={interest}
                      className="text-sm bg-slate-50 text-slate-700 border border-slate-100 px-4 py-2 rounded-xl"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {member.publications.length > 0 && (
              <section className="bg-white rounded-[2rem] border border-slate-100 shadow-sm p-8 md:p-10">
                <h2 className="text-2xl font-bold text-academy-green mb-5">Publications</h2>
                <ul className="space-y-4">
                  {member.publications.map((pub) => (
                    <li
                      key={pub}
                      className="flex gap-3 text-slate-600 text-sm leading-relaxed border-b border-slate-50 pb-4 last:border-0 last:pb-0"
                    >
                      <span className="w-2 h-2 rounded-full bg-academy-gold shrink-0 mt-2" />
                      <span>{pub}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
