import React, { FC } from 'react';

type TGitTimestampProps = {
    timestamp: Date
};

export const GitTimestamp: FC<TGitTimestampProps> = ({timestamp}) => (
    <>
        Ласт апдейтед он {' '}
        <time dateTime={timestamp.toISOString()}>
            {timestamp.toLocaleDateString('ru', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            })}
        </time>
    </>
)

