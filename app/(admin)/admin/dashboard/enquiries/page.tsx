"use client";

import React, { useEffect, useState } from 'react';
import { FiMail, FiPhone, FiUser, FiInfo, FiMessageSquare, FiCornerUpLeft, FiTrash2, FiAlertCircle, FiInbox } from 'react-icons/fi';

interface IEnquiryData {
  _id: string;
  full_name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  status: 'new' | 'read' | 'replied';
  admin_response?: string;
  replied_at?: string;
  createdAt: string;
}

export default function EnquiryManagement() {
  const [enquiries, setEnquiries] = useState<IEnquiryData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const [activeEnquiry, setActiveEnquiry] = useState<IEnquiryData | null>(null);
  const [adminResponse, setAdminResponse] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchEnquiries();
  }, []);

  async function fetchEnquiries() {
    try {
      const res = await fetch('/api/enquiry');
      if (!res.ok) throw new Error();
      const data = await res.json();
      setEnquiries(data);
    } catch {
      setError("Failed to load user inquiries");
    } finally {
      setLoading(false);
    }
  }

  const handleSelectEnquiry = async (enq: IEnquiryData) => {
    setActiveEnquiry(enq);
    setAdminResponse(enq.admin_response || '');

    if (enq.status === 'new') {
      try {
        const res = await fetch(`/api/enquiry/${enq._id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ status: 'read' })
        });
        if (res.ok) {
          setEnquiries(prev => prev.map(item => item._id === enq._id ? { ...item, status: 'read' } : item));
        }
      } catch (err) {
        console.error("Failed to mark as read");
      }
    }
  };

  const handleSendResponse = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeEnquiry || !adminResponse.trim()) return;
    setIsSubmitting(true);

    try {
      const res = await fetch(`/api/enquiry/${activeEnquiry._id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ admin_response: adminResponse })
      });

      if (!res.ok) throw new Error();
      const updated = await res.json();

      setEnquiries(prev => prev.map(item => item._id === updated._id ? updated : item));
      setActiveEnquiry(updated);
    } catch {
      setError("Failed to submit support response");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!confirm("Are you sure you want to drop this inquiry?")) return;
    try {
      const res = await fetch(`/api/enquiry/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error();
      if (activeEnquiry?._id === id) setActiveEnquiry(null);
      fetchEnquiries();
    } catch {
      setError("Execution failed");
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center bg-zinc-950 text-zinc-400">
        <div className="flex items-center gap-3">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-emerald-500 border-t-transparent"></div>
          <p className="text-sm font-medium">Loading inbox logs...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 p-6 text-zinc-100 sm:p-8">
      <div className="mx-auto max-w-7xl">

        {error && (
          <div className="mb-6 flex items-center gap-3 rounded-lg border border-rose-500/20 bg-rose-500/10 p-4 text-rose-400">
            <FiAlertCircle className="h-5 w-5 shrink-0" />
            <p className="text-sm font-medium">{error}</p>
          </div>
        )}

        <div className="mb-6">
          <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Enquiries Desk</h1>
          <p className="mt-1 text-sm text-zinc-400">Address, view, and reply to client requests directly</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          
          <div className="lg:col-span-1 rounded-xl border border-zinc-800 bg-zinc-900 overflow-hidden h-[75vh] flex flex-col">
            <div className="p-4 border-b border-zinc-800 bg-zinc-900/50">
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Incoming Feed ({enquiries.length})</span>
            </div>
            
            <div className="flex-1 overflow-y-auto divide-y divide-zinc-800/60 custom-scrollbar">
              {enquiries.length === 0 ? (
                <div className="p-8 text-center text-zinc-500 text-sm">
                  <FiInbox className="mx-auto h-8 w-8 mb-2 text-zinc-700" />
                  No tickets logged.
                </div>
              ) : (
                enquiries.map((enq) => (
                  <div
                    key={enq._id}
                    onClick={() => handleSelectEnquiry(enq)}
                    className={`p-4 text-left transition-colors cursor-pointer block w-full ${
                      activeEnquiry?._id === enq._id 
                        ? 'bg-zinc-800/70 border-l-2 border-emerald-500' 
                        : 'hover:bg-zinc-800/30'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-medium text-sm text-white truncate">{enq.full_name}</span>
                      <span className={`text-[9px] px-2 py-0.5 font-bold uppercase rounded-full ${
                        enq.status === 'replied' ? 'bg-emerald-500/10 text-emerald-400' :
                        enq.status === 'read' ? 'bg-blue-500/10 text-blue-400' : 'bg-rose-500/10 text-rose-400 animate-pulse'
                      }`}>
                        {enq.status}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-300 font-medium truncate mt-1">{enq.subject}</p>
                    <p className="text-[11px] text-zinc-500 line-clamp-1 mt-0.5">{enq.message}</p>
                    
                    <div className="mt-3 flex items-center justify-between text-[10px] text-zinc-500">
                      <span>{new Date(enq.createdAt).toLocaleDateString()}</span>
                      <button 
                        onClick={(e) => handleDelete(enq._id, e)}
                        className="text-zinc-500 hover:text-rose-400 p-1 cursor-pointer transition-colors"
                      >
                        <FiTrash2 />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col justify-between rounded-xl border border-zinc-800 bg-zinc-900 h-[75vh] overflow-hidden">
            {activeEnquiry ? (
              <div className="flex flex-col h-full overflow-y-auto p-6 custom-scrollbar justify-between">
                <div>
                  <div className="border-b border-zinc-800 pb-4">
                    <h2 className="text-xl font-bold text-white tracking-tight">{activeEnquiry.subject}</h2>
                    <div className="mt-3 flex flex-wrap gap-4 text-xs text-zinc-400">
                      <span className="flex items-center gap-1.5"><FiUser className="text-emerald-400" /> {activeEnquiry.full_name}</span>
                      <span className="flex items-center gap-1.5"><FiMail className="text-zinc-500" /> {activeEnquiry.email}</span>
                      <span className="flex items-center gap-1.5"><FiPhone className="text-zinc-500" /> {activeEnquiry.phone}</span>
                    </div>
                  </div>

                  <div className="mt-5 bg-zinc-950/60 rounded-xl p-4 border border-zinc-800/40">
                    <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider block mb-2">Message Payload</span>
                    <p className="text-sm text-zinc-200 leading-relaxed whitespace-pre-wrap">"{activeEnquiry.message}"</p>
                  </div>

                  {activeEnquiry.admin_response && (
                    <div className="mt-4 bg-emerald-950/10 rounded-xl p-4 border border-emerald-900/20">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] text-emerald-400 uppercase font-bold tracking-wider flex items-center gap-1">
                          <FiCornerUpLeft /> Replied Outbox
                        </span>
                        {activeEnquiry.replied_at && (
                          <span className="text-[10px] text-zinc-500">{new Date(activeEnquiry.replied_at).toLocaleString()}</span>
                        )}
                      </div>
                      <p className="text-sm text-zinc-300 whitespace-pre-wrap">{activeEnquiry.admin_response}</p>
                    </div>
                  )}
                </div>

                <form onSubmit={handleSendResponse} className="mt-6 border-t border-zinc-800 pt-4">
                  <label className="block text-xs font-medium text-zinc-400 mb-2">Write Outgoing Response</label>
                  <textarea
                    value={adminResponse}
                    onChange={(e) => setAdminResponse(e.target.value)}
                    required
                    placeholder="Type your official fallback or resolution email details here..."
                    rows={4}
                    className="w-full rounded-lg border border-zinc-800 bg-zinc-950 p-3 text-sm text-white focus:border-emerald-500 focus:outline-none resize-none"
                  />
                  <div className="mt-3 flex justify-end">
                    <button
                      type="submit"
                      disabled={isSubmitting || !adminResponse.trim()}
                      className="bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs py-2 px-4 rounded-lg transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1.5"
                    >
                      <FiCornerUpLeft /> {isSubmitting ? 'Sending...' : 'Commit Response'}
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="m-auto text-center p-8 text-zinc-500 flex flex-col items-center">
                <FiInfo className="h-10 w-10 text-zinc-700 mb-3" />
                <h3 className="text-sm font-semibold text-zinc-400">No Enquiry Selected</h3>
                <p className="text-xs text-zinc-600 mt-1 max-w-xs">Pick an active conversation block from the timeline feed list to respond.</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}