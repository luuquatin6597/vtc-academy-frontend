import React from 'react';

interface TextProps {
    text: string;
}

const Text: React.FC<TextProps> = ({ text }) => {
    return <p>{text}</p>;
};

export default Text;