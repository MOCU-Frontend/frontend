import { useEffect, useState } from 'react';

export function useScript(src: string) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ErrorEvent | undefined>();

  useEffect(() => {
    let script: HTMLScriptElement | null = document.querySelector(
      `script[src="${src}"]`
    );
    if (script) {
      setLoading(false);
      return;
    } else {
      script = document.createElement('script');
      script.src = src;
      script.type = 'text/javascript';
      script.async = true;
    }

    const handleLoad = () => setLoading(false);
    const handleError = (error: ErrorEvent) => {
      setError(error);
    };

    script.addEventListener('load', handleLoad);
    script.addEventListener('error', handleError);

    document.body.appendChild(script);

    return () => {
      if (script) {
        script.removeEventListener('load', handleLoad);
        script.removeEventListener('error', handleError);
      }
    };
  }, [src]);

  return { loading, error };
}
