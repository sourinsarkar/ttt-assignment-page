import {  } from "@phosphor-icons/react";

type StatsProp = {
    statIcons: string;
}

const Stats: React.FC<StatsProp> = ({ statIcons }) => {
    return (
        <div>
            <div>
                <div>
                    <statIcons />
                </div>
                <div></div>
            </div>
        </div>
    );
}

export default Stats