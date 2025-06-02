import { LiveProvider, LivePreview, LiveError } from 'react-live';
import { motion } from 'framer-motion';
import Loader from './Loader';

const GalaCat = ({ data, loading, error, empty }) => {
    if (loading) return <Loader />;
    if (error) return <div><h1 className='text-5xl'>:( <span >Sorry: {error}</span></h1></div>;
    if (empty) return <h1>Nothing found</h1>
    return (
        <div className="px-4 py-6 select-text">
            {data.map((cont, idx) => (
                <motion.div key={idx} className="mb-9">
                    <div className="max-h-[70vh] min-h-[70vh] flex items-center justify-center rounded-t-xl border p-4">
                        <LiveProvider code={cont.code} noInline scope={{ motion }}>
                            {cont.leave ? <LivePreview /> : <div className="w-full h-full flex items-center justify-center">
                                <LivePreview />
                            </div>}

                            <LiveError className="text-red-500 text-xs mt-2" />
                        </LiveProvider>
                    </div>

                    {/* Footer */}
                    <div className="bg-black dark:bg-white dark:text-black text-white  flex items-center rounded-b-2xl justify-between px-3 py-2 text-xs">
                        <span className="font-medium truncate">{cont.author || 'Unknown'}</span>
                        {/* <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                                <svg className="w-3.5 h-3.5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 4.354a8.8 8.8 0 0 1 6.2 2.568 8.8 8.8 0 0 1 0 12.456 8.8 8.8 0 0 1-12.4 0 8.8 8.8 0 0 1 0-12.456A8.8 8.8 0 0 1 12 4.354zm0-2.354C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" />
                                </svg>
                                <span>{cont.views || '0'}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <svg className="w-3.5 h-3.5 dark:text-black text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17 3H7a4 4 0 0 0-4 4v13l7-3 7 3V7a4 4 0 0 0-4-4z" />
                                </svg>
                                <span>{cont.bookmarks || '0'}</span>
                            </div>
                        </div> */}
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default GalaCat; 
