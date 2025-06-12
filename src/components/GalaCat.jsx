import { LiveProvider, LivePreview, LiveError } from 'react-live';
import { motion } from 'framer-motion';
import Loader from './Loader';
import { useState } from 'react';

const GalaCat = ({ data, loading, error, empty }) => {
    const [copiedIndex, setCopiedIndex] = useState(null);

    const handleCopy = (code, idx) => {
        let cleanCode = code.trim();

        if (cleanCode.startsWith('render(')) {
            cleanCode = cleanCode.slice(7); // Remove 'render('
            if (cleanCode.endsWith(');')) cleanCode = cleanCode.slice(0, -2); // Remove ');'
            else if (cleanCode.endsWith(')')) cleanCode = cleanCode.slice(0, -1); // Remove ')'
        }

        navigator.clipboard.writeText(cleanCode).then(() => {
            setCopiedIndex(idx);
            setTimeout(() => setCopiedIndex(null), 1500);
        });
    };


    if (loading) return <Loader />;
    if (error) return <div><h1 className='text-5xl'>:( <span>Sorry: {error}</span></h1></div>;
    if (empty) return <h1>Nothing found</h1>

    return (
        <div className="px-4 py-6 select-text">
            {data.map((cont, idx) => (
                <motion.div key={idx} className="mb-9 relative">
                    {/* Copy button */}
                    <button
                        onClick={() => handleCopy(cont.code, idx)}
                        className="absolute top-3 right-3 z-10 bg-black/70 dark:bg-white/80 text-white dark:text-black text-xs px-2 py-1 rounded hover:scale-105 transition-transform"
                    >
                        {copiedIndex === idx ? "Copied!" : "Copy"}
                    </button>

                    {/* Preview + Code area */}
                    <div className="max-h-[70vh] min-h-[70vh] flex items-center justify-center rounded-t-xl border p-4 relative">
                        <LiveProvider code={cont.code} noInline scope={{ motion }}>
                            {cont.leave ? (
                                <LivePreview />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center">
                                    <LivePreview />
                                </div>
                            )}
                            <LiveError className="text-red-500 text-xs mt-2" />
                        </LiveProvider>
                    </div>

                    {/* Footer */}
                    <div className="bg-black dark:bg-white dark:text-black text-white flex items-center rounded-b-2xl justify-between px-3 py-2 text-xs">
                        <span className="font-medium truncate">{cont.author || 'Unknown'}</span>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default GalaCat;
