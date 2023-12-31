interface Props {
    value: string;
    statTopic: string | undefined;
}

const Stats: React.FC<Props> = ({ value, statTopic }) => {
    return (
        <div className="w-full flex flex-col justify-center">
            <div className="flex justify-center border-2 border-black/25 rounded-xl py-1">
                <div className="xl:text-xl xsm:text-base font-bold text-black/50">{value}</div>
            </div>
            <div className="flex justify-center text-xs text-black/50 xsm:pt-0.5">{statTopic}</div>
        </div>
    );
}

export default Stats