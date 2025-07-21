"use client";

import { useState } from "react";
import { Phone, Copy, Mail, Check } from "lucide-react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import metadata from "@/data/metadata.json";
import * as simpleIcons from 'simple-icons';

export function ContactCard() {
  const { contact } = metadata;
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for browsers that don't support clipboard API
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand("copy");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (fallbackErr) {
        console.error("Failed to copy:", fallbackErr);
      }
      document.body.removeChild(textArea);
    }
  };

  const handlePhoneCall = () => {
    window.location.href = `tel:${contact.details.phone}`;
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(contact.details.whatsapp.message);
    window.open(`https://wa.me/${contact.details.phoneClean}?text=${message}`, "_blank");
  };

  const handleEmail = () => {
    const subject = encodeURIComponent("Portfolio Inquiry");
    window.location.href = `mailto:${contact.details.email}?subject=${subject}`;
  };

  return (
    <Card className="shadow-none border-0">
      <CardContent className="p-0">
        <div className="space-y-4">
          {/* Phone Number */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <button
                onClick={handlePhoneCall}
                className="flex items-center space-x-3 text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
                aria-label={contact.actions.callPhone}
              >
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="font-medium">{contact.details.phoneFormatted}</span>
              </button>
              <button
                onClick={() => copyToClipboard(contact.details.phoneFormatted)}
                className="p-2 text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800"
                aria-label={contact.actions.copyPhone}
              >
                {copied ? (
                  <Check className="w-4 h-4 text-green-600" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
            {copied && (
              <p className="text-sm text-green-600 font-medium animate-fade-in">
                {contact.messages.phoneCopied}
              </p>
            )}
          </div>

          {/* WhatsApp */}
          <button
            onClick={handleWhatsApp}
            className="flex items-center space-x-3 text-zinc-600 dark:text-zinc-400 hover:text-green-600 dark:hover:text-green-400 transition-colors group w-full"
            aria-label={contact.actions.sendWhatsApp}
          >
            <div 
              className="w-4 h-4 group-hover:scale-110 transition-transform"
              dangerouslySetInnerHTML={{ __html: simpleIcons.siWhatsapp.svg }}
            />
            <span className="font-medium">WhatsApp</span>
          </button>

          {/* Email */}
          <button
            onClick={handleEmail}
            className="flex items-center space-x-3 text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group w-full"
            aria-label={contact.actions.sendEmail}
          >
            <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span className="font-medium">{contact.details.email}</span>
          </button>
        </div>
      </CardContent>
    </Card>
  );
}