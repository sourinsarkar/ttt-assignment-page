interface Props {
    value: string;
}

const Stats: React.FC<Props> = ({ value }) => {
    return (
        <div className="w-full flex justify-center border-2 border-black/25 rounded-xl bg-green-300">
            <div>{value}</div>
        </div>
    );
}

export default Stats