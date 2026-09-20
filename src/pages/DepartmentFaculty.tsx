import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, GraduationCap, Mail, Users } from 'lucide-react';
import { getDepartmentById, getFacultyByDept, type FacultyMember } from '../data/facultyData';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 120, damping: 16 },
  },
};

function MemberCard({ member }: { member: FacultyMember }) {
  const [imgFailed, setImgFailed] = useState(false);
  const showPhoto = Boolean(member.photo) && !imgFailed;

  return (
    <motion.article
      variants={item}
      className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover-lift hover-glow group flex flex-col"
    >
      <div className="relative aspect-[3/4] bg-slate-100 overflow-hidden">
        {showPhoto ? (
          <img
            src={member.photo}
            alt={member.name}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            onError={() => setImgFailed(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
            <GraduationCap size={48} className="text-slate-300" />
          </div>
        )}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2.5 rounded-xl shadow-sm text-academy-green">
          <GraduationCap size={18} />
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-academy-green mb-1">{member.name}</h3>
        <p className="text-academy-gold font-semibold text-sm mb-3">{member.designation}</p>
        <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
          {member.specialization}
        </p>
        {member.email && (
          <a
            href={`mailto:${member.email}`}
            className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-academy-green mb-5 truncate"
          >
            <Mail size={14} className="shrink-0" />
            <span className="truncate">{member.email}</span>
          </a>
        )}
        <Link
          to={`/faculty-profile/${member.id}`}
          className="btn-primary text-sm text-center py-2.5"
        >
          View Profile
        </Link>
      </div>
    </motion.article>
  );
}

export default function DepartmentFaculty() {
  const { deptId } = useParams<{ deptId: string }>();
  const department = deptId ? getDepartmentById(deptId) : undefined;

  if (!department) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-3xl font-bold text-academy-green mb-4">Department Not Found</h1>
        <p className="text-slate-500 mb-8">The department you requested is not in our academic roster.</p>
        <Link to="/faculty" className="btn-primary inline-flex items-center gap-2">
          <ArrowLeft size={16} /> Back to Departments
        </Link>
      </div>
    );
  }

  const members = getFacultyByDept(department.id);

  return (
    <div className="flex flex-col bg-slate-50 min-h-[70vh]">
      <section className="py-12 md:py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex flex-wrap items-center gap-2 text-sm text-slate-500 mb-8">
            <Link to="/" className="hover:text-academy-green">
              Home
            </Link>
            <span>/</span>
            <Link to="/faculty" className="hover:text-academy-green">
              Departments
            </Link>
            <span>/</span>
            <span className="text-academy-green font-medium">{department.name}</span>
          </nav>

          <span className="text-academy-gold font-bold tracking-widest uppercase text-xs mb-4 block">
            Faculty Roster
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-academy-green mb-6 leading-tight">
            {department.name} <span className="text-academy-gold">Faculty</span>
          </h1>
          <p className="text-slate-600 max-w-2xl mb-8 leading-relaxed">{department.overview}</p>

          <Link
            to="/faculty"
            className="inline-flex items-center gap-2 text-sm font-bold text-academy-green hover:text-academy-gold transition-colors"
          >
            <ArrowLeft size={16} />
            Other Departments
          </Link>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {members.length === 0 ? (
            <div className="bg-white rounded-[2.5rem] border border-slate-100 p-16 text-center">
              <Users size={40} className="mx-auto text-slate-300 mb-6" />
              <h2 className="text-2xl font-bold text-academy-green mb-3">No Faculty Registered</h2>
              <p className="text-slate-500 max-w-md mx-auto">
                Faculty profiles for this department will appear here once the academic roster is updated.
              </p>
            </div>
          ) : (
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {members.map((member) => (
                <div key={member.id}>
                  <MemberCard member={member} />
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
