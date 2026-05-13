import { useState, useEffect, useRef } from 'react';

const LANGS = [
  { code: 'fr', flag: '🇫🇷', label: 'Français' },
  { code: 'en', flag: '🇺🇸', label: 'English' },
  { code: 'es', flag: '🇪🇸', label: 'Español' },
  { code: 'de', flag: '🇩🇪', label: 'Deutsch' },
  { code: 'it', flag: '🇮🇹', label: 'Italiano' },
  { code: 'pt', flag: '🇧🇷', label: 'Português' },
  { code: 'ar', flag: '🇸🇦', label: 'العربية' },
  { code: 'zh', flag: '🇨🇳', label: '中文' },
];

// Messages d'accueil par langue (version courte, on étendra après)
const GREETINGS = {
  fr: "🌍 Bienvenue, je suis SuperBot Mondial REUSSITESS®.
Pose-moi des questions sur la Guadeloupe, la Martinique, l'affiliation Amazon ou tes boutiques.",
  en: "🌍 Welcome, I am SuperBot Mondial REUSSITESS®.
Ask me about Guadeloupe, Martinique, Amazon affiliation or your stores.",
  es: "🌍 Bienvenido, soy SuperBot Mondial REUSSITESS®.
Pregúntame sobre Guadalupe, Martinica o afiliación de Amazon.",
  de: "🌍 Willkommen, ich bin SuperBot Mondial REUSSITESS®.
Frag mich zu Guadeloupe, Martinique oder Amazon-Partnerprogramm.",
  it: "🌍 Benvenuto, sono SuperBot Mondial REUSSITESS®.
Chiedimi di Guadalupa, Martinica o affiliazione Amazon.",
  pt: "🌍 Bem-vindo, sou o SuperBot Mondial REUSSITESS®.
Pergunte sobre Guadalupe, Martinica ou afiliação Amazon.",
  ar: "🌍 أهلاً، أنا SuperBot Mondial REUSSITESS®.
اسألني عن غوادلوب، المارتينيك أو برنامج شركاء أمازون.",
  zh: "🌍 你好，我是 SuperBot Mondial REUSSITESS®。
可以询问瓜德罗普、马提尼克或亚马逊联盟。",
};

// Mini base de connaissances (on l’agrandira après)
const KNOWLEDGE = {
  // DOM‑TOM
  'guadeloupe': {
    fr: "🇬🇵 **Guadeloupe**
Archipel des Antilles françaises, volcan de la Soufrière, histoire marquée par la colonisation, l'esclavage et les luttes sociales modernes.
Cœur de REUSSITESS®, base de tes opérations Amazon et TikTok.",
  },
  'martinique': {
    fr: "🇲🇶 **Martinique**
Île française des Caraïbes, Montagne Pelée, Fort‑de‑France, histoire coloniale et créole forte, littérature d'Aimé Césaire.",
  },
  'guyane': {
    fr: "🇬🇫 **Guyane**
Territoire français en Amérique du Sud, 96% de forêt amazonienne, Centre spatial de Kourou, forte diversité culturelle et migratoire.",
  },

  // Amazon global / boutiques (résumé, on détaillera ensuite)
  'amazon-boutiques': {
    fr: "🛍️ **Tes Boutiques Amazon**
Tu disposes de 26 boutiques Amazon réparties dans 14 pays (France, USA, Canada, Brésil, Royaume‑Uni, Allemagne, Italie, Espagne, Belgique, Suède, Australie, Singapour, Inde, Nouvelle‑Zélande).
Tu as 14 boutiques personnelles et 12 boutiques influenceur.",
  },

  // Aide simple
  'aide': {
    fr: "💡 Tu peux me demander par exemple :
• "histoire guadeloupe"
• "martinique culture"
• "guyane espace"
• "boutiques amazon"",
  },
};

function cleanInput(text) {
  return text.trim().toLowerCase();
}

// Routeur de réponses : si la question n'est pas comprise, le bot NE répond RIEN.
function getResponse(raw, lang) {
  const msg = cleanInput(raw);

  // DOM‑TOM
  if (msg.includes('guadeloupe')) return KNOWLEDGE['guadeloupe'][lang] || KNOWLEDGE['guadeloupe'].fr;
  if (msg.includes('martinique')) return KNOWLEDGE['martinique'][lang] || KNOWLEDGE['martinique'].fr;
  if (msg.includes('guyane') || msg.includes('guyane française')) return KNOWLEDGE['guyane'][lang] || KNOWLEDGE['guyane'].fr;

  // Boutiques / Amazon
  if (msg.includes('boutique') || msg.includes('amazon')) return KNOWLEDGE['amazon-boutiques'][lang] || KNOWLEDGE['amazon-boutiques'].fr;

  // Aide
  if (msg.includes('aide') || msg.includes('help') || msg === '?') {
    return KNOWLEDGE['aide'][lang] || KNOWLEDGE['aide'].fr;
  }

  // Si rien n’est reconnu → retourne null (le bot se tait)
  return null;
}

export default function SuperBotReussitess() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState('fr');
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const endRef = useRef(null);

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{ role: 'bot', text: GREETINGS[lang] || GREETINGS.fr }]);
    }
  }, [open, lang, messages.length]);

  useEffect(() => {
    if (endRef.current) endRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const send = (e) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', text }]);

    const res = getResponse(text, lang);

    if (res) {
      setMessages((prev) => [...prev, { role: 'bot', text: res }]);
    }
    // Si res === null → aucune réponse ajoutée (le bot ne répète pas n'importe quoi)
  };

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-6 z-40 rounded-full bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-white px-4 py-3 shadow-2xl flex items-center gap-2"
      >
        <span>🌍</span>
        <span className="font-semibold text-sm">SuperBot Mondial REUSSITESS®</span>
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-40 w-80 h-[480px] bg-white rounded-2xl shadow-2xl flex flex-col">
          <div className="px-3 py-2 border-b flex items-center justify-between bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-t-2xl">
            <div>
              <div className="font-semibold text-sm">SuperBot Mondial REUSSITESS®</div>
              <div className="text-[11px] opacity-80">Amazon • Guadeloupe • DOM‑TOM • 14 pays</div>
            </div>
            <button onClick={() => setOpen(false)} className="text-xs px-2 py-1 bg-white/10 rounded">
              ✕
            </button>
          </div>

          <div className="px-2 py-1 border-b flex gap-1 overflow-x-auto text-xs">
            {LANGS.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`px-2 py-1 rounded-full whitespace-nowrap ${
                  lang === l.code ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-700'
                }`}
              >
                {l.flag} {l.label}
              </button>
            ))}
          </div>

          <div className="flex-1 overflow-y-auto p-3 space-y-2 text-sm">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[90%] px-3 py-2 rounded-2xl whitespace-pre-wrap ${
                    m.role === 'user'
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            <div ref={endRef} />
          </div>

          <form onSubmit={send} className="p-2 border-t flex gap-2">
            <input
              className="flex-1 border rounded-xl px-2 py-1 text-sm"
              placeholder="Pose ta question…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              type="submit"
              className="px-3 py-1 rounded-xl bg-purple
