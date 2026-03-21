import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';
import { useState } from 'react';


const injectedJS = `
  if (!window.speechSynthesis) {
    window.speechSynthesis = {
      speak: function(u) { window.ReactNativeWebView.postMessage(JSON.stringify({type:'tts',text:u.text})) },
      cancel: function() {},
      getVoices: function() { return [] },
      onvoiceschanged: null
    };
    window.SpeechSynthesisUtterance = function(text) { this.text = text; this.lang = 'fr-FR'; };
  }
  true;
`;

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="#0f172a" />
      {loading && (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#f59e0b" />
        </View>
      )}
      <WebView
        source={{ uri: 'https://reussitess.fr' }}
        style={styles.webview}
        onLoadEnd={() => setLoading(false)}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        allowsInlineMediaPlayback={true}
        mediaPlaybackRequiresUserAction={false}
        injectedJavaScript={injectedJS}
        onMessage={(e) => { try { const d=JSON.parse(e.nativeEvent.data); if(d.type==='tts') console.log('[TTS]',d.text) } catch(err){} }}
        userAgent="REUSSITESS-AI-App/1.0 Android"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f172a' },
  webview: { flex: 1 },
  loader: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center', backgroundColor: '#0f172a', zIndex: 999 }
});
