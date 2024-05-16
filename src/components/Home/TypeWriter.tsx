
import {useState, useEffect}from 'react'


function TypeWriter() {
    const words=['create', 'build', 'design', 'code','connect','compete', 'learn', 'teach']
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentWord, setCurrentWord] = useState('');
    const [changeWord, setChangeWord] = useState(false);
    useEffect(() => {
        if(changeWord===true){
            setCurrentWordIndex((prevIndex) => (prevIndex === words.length - 1 ? 0 : prevIndex + 1));
        }
        setChangeWord(false)
        
    }, [changeWord]);

    useEffect(() => {
        const word = words[currentWordIndex];
        let currentWord = '';
        let currentIndex = 0;

        const typingInterval = setInterval(() => {
            currentWord += word[currentIndex];
            setCurrentWord(currentWord);
            currentIndex++;

            // If the word is fully typed, clear the interval
            if (currentIndex === word.length) {
                clearInterval(typingInterval);
                setTimeout(()=>{
                    let deleteIndex=currentIndex-1;
                    const deleteInterval=setInterval(()=>{
                        currentWord=currentWord.slice(0,deleteIndex);
                        setCurrentWord(currentWord);
                        deleteIndex--;
                        if (deleteIndex==-1){
                            clearInterval(deleteInterval)
                            setChangeWord(true)
                        }
                    },100)
                },5000)
            }

        }, 100);

        return () => {
        clearInterval(typingInterval);
        };
    }, [currentWordIndex]);
   

    return (
    <div className='flex'>
        <span>{` ${currentWord}`}</span><div className='bg-white w-1 animate-blinkfast'></div>
    </div>
    );
}

export default TypeWriter