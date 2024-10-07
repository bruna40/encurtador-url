import { Header } from "../../Components/Header/index";
import { Footer } from "../../Components/Footer/index";
import { useState } from "react";
import { ErrorCard } from "../../Components/ErrorCard";
import axios from "axios";
import { ContainerMain, ShortenedUrlContainer } from "./style";

export function Home() {
    const [url, setUrl] = useState('');
    const [shortenedUrl, setShortenedUrl] = useState('');
    const [error, setError] = useState<string | null>(null);
    const shortenUrl = async () => {
        setError(null);
        try {
          const baseUrl = import.meta.env.MODE === 'development'
            ? '/encurtamentos'
            : 'https://api.encurtador.dev/encurtamentos';
      
          const response = await axios.post(baseUrl, { url });
      
          const fullUrl = `https://${response.data.urlEncurtada}`;
          setShortenedUrl(fullUrl);
        } catch (error: unknown) {
          if (axios.isAxiosError(error)) {
            setError(error.message);
          } else {
            setError('Ocorreu um erro inesperado');
          }
        }
      };
      


    const handleCloseError = () => {
        setError(null);
    };
    return (
        <>
            <Header />
                <ContainerMain>
                <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Insira uma URL válida (ex: https://www.exemplo.com)"
                />
                <button onClick={shortenUrl}>Encurtar URL</button>
                <ShortenedUrlContainer>
                {shortenedUrl && (
                    <p>
                    Sua URL encurtada: 
                    <a href={shortenedUrl} target="_blank" rel="noopener noreferrer">
                        {shortenedUrl}
                    </a>
                    </p>
                )}
                </ShortenedUrlContainer>
                {error && <ErrorCard message={error} onClose={handleCloseError} />}

                </ContainerMain>

            <Footer />
        </>
    )
}