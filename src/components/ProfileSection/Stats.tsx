interface Props {
    value: string;
    statTopic: string | undefined;
}

const Stats: React.FC<Props> = ({ value, statTopic }) => {
    return (
        <div className="w-full flex flex-col justify-center">
            <div className="flex justify-center border-2 border-black/25 rounded-xl py-1">
                <div className="text-xl font-bold text-black/50">{value}</div>
            </div>
            <div className="flex justify-center text-xs text-black/50">{statTopic}</div>
        </div>
    );
}

export default Stats