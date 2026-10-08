import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Building,
  DraftingCompass,
  Briefcase,
  Home,
  FileCheck2,
  Video,
  ShieldCheck,
  Check,
  Clock,
  Calendar,
  Sparkles,
  ArrowRight,
  Download,
} from 'lucide-react';
import { UserRole, ExperienceFormat, DemoWindow, BookingFormData } from '../types';
import {
  BOOKING_CITIES,
  BOOKING_DEFAULT_CITY,
  CONTACT_INFO,
} from '../content/contact';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    role: 'villa_owner',
    format: 'showroom',
    fullName: '',
    email: '',
    countryCode: CONTACT_INFO.countryCodes[0].code,
    phone: '',
    city: BOOKING_DEFAULT_CITY,
    window: 'afternoon',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [confirmedCode, setConfirmedCode] = useState('');

  const handleRoleChange = (role: UserRole) => {
    setFormData((prev) => ({ ...prev, role }));
  };

  const handleFormatChange = (format: ExperienceFormat) => {
    setFormData((prev) => ({ ...prev, format }));
  };

  const handleWindowChange = (demoWindow: DemoWindow) => {
    setFormData((prev) => ({ ...prev, window: demoWindow }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = `SYM-${Math.floor(100000 + Math.random() * 900000)}`;
    setConfirmedCode(code);
    setIsSubmitted(true);
  };

  const handleDownloadCalendar = () => {
    const calendarContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Symetra Solution//Sanctuary Demo//EN
BEGIN:VEVENT
UID:${confirmedCode}@symetra.com
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z
SUMMARY:Symetra Private Sanctuary Demonstration (${formData.format.toUpperCase()})
DESCRIPTION:VIP Architectural Automation Consultation. Reservation Code: ${confirmedCode}. Location: ${formData.city}. Format: ${formData.format}.
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([calendarContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `Symetra_Demonstration_${confirmedCode}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const resetModal = () => {
    setIsSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
        {/* Backdrop Scrim */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0C1612]/75 backdrop-blur-md transition-opacity"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl bg-[#FCFBF8] rounded-2xl shadow-2xl border border-[#E8E2D5] overflow-hidden my-6 z-10"
        >
          {isSubmitted ? (
            /* Success State Confirmation Card */
            <div className="p-8 sm:p-10 text-center">
              <div className="w-16 h-16 rounded-full bg-[#E2BE76]/20 border border-[#E2BE76] flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-[#997328]" />
              </div>

              <span className="text-xs font-bold tracking-widest uppercase text-[#B3934B]">
                Private Demonstration Confirmed
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#14231C] mt-2 mb-3">
                Experience Symetra Sanctuary
              </h2>
                <p className="text-sm text-[#4A554E] max-w-md mx-auto mb-6">
                Thank you, <span className="font-semibold text-[#14231C]">{formData.fullName || 'Esteemed Guest'}</span>. Your private walkthrough request has been noted — our team will confirm the details with you.
              </p>

              {/* VIP Pass Summary Card */}
              <div className="bg-[#F5F2EB] rounded-xl border border-[#E2DDD0] p-5 text-left mb-6 max-w-md mx-auto">
                <div className="flex justify-between items-center pb-3 border-b border-[#E2DDD0]">
                  <span className="text-xs text-[#6B756E] uppercase font-semibold">Reservation Pass</span>
                  <span className="font-mono text-xs font-bold text-[#14231C] bg-white px-2.5 py-1 rounded border border-[#DDD7C8]">
                    {confirmedCode}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-3 text-xs">
                  <div>
                    <span className="text-[#858E87] block">Format</span>
                    <span className="font-medium text-[#14231C] capitalize">
                      {formData.format === 'showroom' ? 'Showroom Immersion' : formData.format === 'onsite' ? 'On-Site Assessment' : 'Virtual Engineering'}
                    </span>
                  </div>
                  <div>
                    <span className="text-[#858E87] block">Window</span>
                    <span className="font-medium text-[#14231C] capitalize">
                      {formData.window} (14:00 - 18:00)
                    </span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-[#858E87] block">Location</span>
                    <span className="font-medium text-[#14231C]">{formData.city}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <button
                  onClick={handleDownloadCalendar}
                  className="w-full sm:w-auto px-5 py-2.5 bg-white border border-[#DDD7C8] hover:bg-[#F2EFE9] text-xs font-semibold text-[#14231C] rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4 text-[#B3934B]" />
                  <span>Add to Calendar (.ics)</span>
                </button>
                <button
                  onClick={resetModal}
                  className="w-full sm:w-auto px-6 py-2.5 bg-[#14231C] hover:bg-[#1E332A] text-xs font-semibold text-white rounded-xl transition-all shadow-sm"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            /* Standard Booking Form (Matching Image 1.png) */
            <form onSubmit={handleSubmit} className="p-6 sm:p-8">
              {/* Header Row with Badge & Close */}
              <div className="flex items-center justify-between mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#14231C] text-[#E5E9E7] text-xs font-medium">
                  <span className="w-2 h-2 rounded-full bg-[#22C55E]"></span>
                  <span className="tracking-wide">PRIVATE DEMONSTRATION BOOKING</span>
                  <span className="text-[#858E87]">·</span>
                  <span className="text-[#CFC9BA]">Cairo & Riyadh Studios</span>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="w-8 h-8 rounded-full bg-[#EFECE3] hover:bg-[#E5E1D5] flex items-center justify-center text-[#4A554E] hover:text-[#14231C] transition-colors"
                  aria-label="Close dialog"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Title & Subtitle */}
              <div className="mb-6">
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#14231C] tracking-tight">
                  Experience Symetra Sanctuary
                </h2>
                <p className="text-xs sm:text-sm text-[#5C6660] mt-1 leading-relaxed">
                  Schedule an exclusive in-person walkthrough at our Riyadh or Cairo private experience centers, or request a technical engineer consultation.
                </p>
              </div>

              {/* 1. I AM INQUIRING AS */}
              <div className="mb-5">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B756E] mb-2">
                  1. I Am Inquiring As
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <button
                    type="button"
                    onClick={() => handleRoleChange('villa_owner')}
                    className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border text-xs font-medium transition-all ${
                      formData.role === 'villa_owner'
                        ? 'bg-[#14231C] text-white border-[#14231C] shadow-sm'
                        : 'bg-white text-[#4A554E] border-[#E2DDD0] hover:border-[#C8BFAD]'
                    }`}
                  >
                    <Home className="w-3.5 h-3.5" />
                    <span>Villa Owner</span>
                    {formData.role === 'villa_owner' && (
                      <Check className="w-3.5 h-3.5 text-[#E2BE76] ml-0.5" />
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => handleRoleChange('architect_designer')}
                    className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border text-xs font-medium transition-all ${
                      formData.role === 'architect_designer'
                        ? 'bg-[#14231C] text-white border-[#14231C] shadow-sm'
                        : 'bg-white text-[#4A554E] border-[#E2DDD0] hover:border-[#C8BFAD]'
                    }`}
                  >
                    <DraftingCompass className="w-3.5 h-3.5" />
                    <span>Architect / Designer</span>
                    {formData.role === 'architect_designer' && (
                      <Check className="w-3.5 h-3.5 text-[#E2BE76] ml-0.5" />
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => handleRoleChange('commercial_partner')}
                    className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border text-xs font-medium transition-all ${
                      formData.role === 'commercial_partner'
                        ? 'bg-[#14231C] text-white border-[#14231C] shadow-sm'
                        : 'bg-white text-[#4A554E] border-[#E2DDD0] hover:border-[#C8BFAD]'
                    }`}
                  >
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>Commercial Partner</span>
                    {formData.role === 'commercial_partner' && (
                      <Check className="w-3.5 h-3.5 text-[#E2BE76] ml-0.5" />
                    )}
                  </button>
                </div>
              </div>

              {/* 2. PREFERRED EXPERIENCE FORMAT */}
              <div className="mb-5">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B756E] mb-2">
                  2. Preferred Experience Format
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {/* Card 1: Showroom Immersion */}
                  <div
                    onClick={() => handleFormatChange('showroom')}
                    className={`p-3.5 rounded-xl border cursor-pointer transition-all flex flex-col justify-between ${
                      formData.format === 'showroom'
                        ? 'bg-[#F7F4EB] border-[#B3934B] shadow-sm ring-1 ring-[#B3934B]'
                        : 'bg-white border-[#E2DDD0] hover:border-[#C8BFAD]'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <Building className="w-4 h-4 text-[#B3934B]" />
                        <div
                          className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                            formData.format === 'showroom'
                              ? 'border-[#B3934B] bg-[#B3934B] text-white'
                              : 'border-[#CCC5B5]'
                          }`}
                        >
                          {formData.format === 'showroom' && <Check className="w-2.5 h-2.5" />}
                        </div>
                      </div>
                      <h4 className="text-xs font-bold text-[#14231C]">Showroom Immersion</h4>
                      <p className="text-[11px] text-[#6B756E] mt-1 leading-snug">
                        Live fully-automated villa demo in Riyadh DQ or Cairo 5th Settlement
                      </p>
                    </div>
                  </div>

                  {/* Card 2: On-Site Assessment */}
                  <div
                    onClick={() => handleFormatChange('onsite')}
                    className={`p-3.5 rounded-xl border cursor-pointer transition-all flex flex-col justify-between ${
                      formData.format === 'onsite'
                        ? 'bg-[#F7F4EB] border-[#B3934B] shadow-sm ring-1 ring-[#B3934B]'
                        : 'bg-white border-[#E2DDD0] hover:border-[#C8BFAD]'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <FileCheck2 className="w-4 h-4 text-[#B3934B]" />
                        <div
                          className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                            formData.format === 'onsite'
                              ? 'border-[#B3934B] bg-[#B3934B] text-white'
                              : 'border-[#CCC5B5]'
                          }`}
                        >
                          {formData.format === 'onsite' && <Check className="w-2.5 h-2.5" />}
                        </div>
                      </div>
                      <h4 className="text-xs font-bold text-[#14231C]">On-Site Assessment</h4>
                      <p className="text-[11px] text-[#6B756E] mt-1 leading-snug">
                        Blueprint & electrical layout review at your ongoing construction villa
                      </p>
                    </div>
                  </div>

                  {/* Card 3: Virtual Engineering */}
                  <div
                    onClick={() => handleFormatChange('virtual')}
                    className={`p-3.5 rounded-xl border cursor-pointer transition-all flex flex-col justify-between ${
                      formData.format === 'virtual'
                        ? 'bg-[#F7F4EB] border-[#B3934B] shadow-sm ring-1 ring-[#B3934B]'
                        : 'bg-white border-[#E2DDD0] hover:border-[#C8BFAD]'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <Video className="w-4 h-4 text-[#B3934B]" />
                        <div
                          className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                            formData.format === 'virtual'
                              ? 'border-[#B3934B] bg-[#B3934B] text-white'
                              : 'border-[#CCC5B5]'
                          }`}
                        >
                          {formData.format === 'virtual' && <Check className="w-2.5 h-2.5" />}
                        </div>
                      </div>
                      <h4 className="text-xs font-bold text-[#14231C]">Virtual Engineering</h4>
                      <p className="text-[11px] text-[#6B756E] mt-1 leading-snug">
                        Direct technical video consultation with our low-voltage systems team
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. CONTACT & RESIDENCE LOCATION */}
              <div className="mb-5">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B756E] mb-2">
                  3. Contact & Residence Location
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                  <div>
                    <label className="block text-[11px] font-medium text-[#6B756E] mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      placeholder="e.g. Tariq Al-Mansoor"
                      className="w-full px-3 py-2 bg-white border border-[#DDD7C8] rounded-xl text-xs text-[#14231C] placeholder-[#A4AAA6] focus:outline-none focus:ring-1 focus:ring-[#B3934B] focus:border-[#B3934B]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-[#6B756E] mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="tariq@residence.com"
                      className="w-full px-3 py-2 bg-white border border-[#DDD7C8] rounded-xl text-xs text-[#14231C] placeholder-[#A4AAA6] focus:outline-none focus:ring-1 focus:ring-[#B3934B] focus:border-[#B3934B]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-medium text-[#6B756E] mb-1">
                      Phone / WhatsApp
                    </label>
                    <div className="flex">
                      <select
                        value={formData.countryCode}
                        onChange={(e) =>
                          setFormData({ ...formData, countryCode: e.target.value })
                        }
                        className="px-2.5 py-2 bg-[#F3EFE7] border border-r-0 border-[#DDD7C8] rounded-l-xl text-xs font-medium text-[#14231C] focus:outline-none"
                      >
                        {CONTACT_INFO.countryCodes.map((cc) => (
                          <option key={cc.code} value={cc.code}>
                            {cc.flag} {cc.code}
                          </option>
                        ))}
                      </select>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="50 123 4567"
                        className="w-full px-3 py-2 bg-white border border-[#DDD7C8] rounded-r-xl text-xs text-[#14231C] placeholder-[#A4AAA6] focus:outline-none focus:ring-1 focus:ring-[#B3934B] focus:border-[#B3934B]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-[#6B756E] mb-1">
                      Project City
                    </label>
                    <select
                      value={formData.city}
                      onChange={(e) =>
                        setFormData({ ...formData, city: e.target.value })
                      }
                      className="w-full px-3 py-2 bg-white border border-[#DDD7C8] rounded-xl text-xs text-[#14231C] focus:outline-none focus:ring-1 focus:ring-[#B3934B] focus:border-[#B3934B]"
                    >
                      {BOOKING_CITIES.map((city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* 4. PREFERRED DEMONSTRATION WINDOW */}
              <div className="mb-5">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B756E] mb-2">
                  4. Preferred Demonstration Window
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {CONTACT_INFO.demoWindows.map((win) => (
                    <button
                      key={win.id}
                      type="button"
                      onClick={() => handleWindowChange(win.id)}
                      className={`py-2 px-2 text-center rounded-xl border text-xs transition-all ${
                        formData.window === win.id
                          ? 'bg-[#F7F4EB] border-[#B3934B] text-[#14231C] font-semibold ring-1 ring-[#B3934B]'
                          : 'bg-white border-[#E2DDD0] text-[#4A554E] hover:border-[#C8BFAD]'
                      }`}
                    >
                      <div className="font-medium text-xs">{win.label}</div>
                      <div className="text-[10px] text-[#858E87]">{win.hours}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Privacy Note Box */}
              <div className="mb-6 p-3 rounded-xl bg-[#F4F1EA] border border-[#E4DEC9] flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#2E7D32] shrink-0 mt-0.5" />
                <p className="text-[11px] text-[#556059] leading-relaxed">
                  <span className="font-semibold text-[#14231C]">
                    Privacy note:
                  </span>{' '}
                  We use your details only to arrange your demonstration and never share them with third parties.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:flex-1 py-3 px-5 bg-[#E2BE76] hover:bg-[#D4AF63] active:scale-[0.99] text-[#14231C] text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2 group"
                >
                  <span>Confirm Private Demonstration</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto py-3 px-5 text-xs font-semibold text-[#6B756E] hover:text-[#14231C] hover:bg-[#EFECE3] rounded-xl transition-colors"
                >
                  CANCEL
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
