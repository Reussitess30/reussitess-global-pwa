import React, { useRef, useState, useEffect, useCallback } from "react";

type LangType =
  | "fr-FR"
  | "en-US"
  | "de-DE"
  | "es-ES"
  | "it-IT"
  | "pt-BR";

export default function BotVocal() {
  const [transcript, setTranscript] = useState<string>("");
  const [reply, setReply] = useState<string>("");
  const [lang, setLang] = useState<LangType>("fr-FR");
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  const handleUserInput = useCallback((input: string) => {
    const lowerInput = input.toLowerCase();
    let replyTxt = "";
    if (lowerInput.includes("bonjour"))
      replyTxt = "Bonjour, je suis le bot vocal Reussitess® !";
    else if (lowerInput.includes("au revoir"))
      replyTxt = "Au revoir et bon succès !";
    else
      replyTxt =
        "Je traite ta demande pour Reussitess® Excellence, Innovation, Succès.";

    setReply(replyTxt);
    speak(replyTxt, lang);
  }, [lang]);

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || (window as any).webkitSpeechRecognition;
    recognitionRef.current = new SpeechRecognition();
    recognitionRef.current.lang = lang;
    recognitionRef.current.onresult = (event: SpeechRecognitionEvent) => {
      const text = event.results[0][0].transcript;
      setTranscript(text);
      handleUserInput(text);
    };
    recognitionRef.current.onend = () => {};

    return () => {
      recognitionRef.current?.abort();
    };
  }, [lang, handleUserInput]);

  function speak(text: string, lang: string) {
    const synth = window.speechSynthesis;
    const utter = new window.SpeechSynthesisUtterance(text);
    utter.lang = lang;
    synth.speak(utter);
  }

  function toggleListening() {
    if (recognitionRef.current) {
      recognitionRef.current.start();
    }
  }

  return (
    <div>
      <select
        value={lang}
        onChange={e => setLang(e.target.value as LangType)}
      >
        <option value="fr-FR">Français</option>
        <option value="en-US">English</option>
        <option value="de-DE">Deutsch</option>
        <option value="es-ES">Español</option>
        <option value="it-IT">Italiano</option>
        <option value="pt-BR">Português</option>
      </select>
      <button onClick={toggleListening}>🎤 Parler</button>
      <div>Transcription: {transcript}</div>
      <div>Bot Reussitess® dit : {reply}</div>
    </div>
  );
}
