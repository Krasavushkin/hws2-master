import React from 'react'
import s from './FriendMessage.module.css'
import {MessagePropsType} from "../message/Message";
import {friendMessage0, message0} from "../HW1";


// создать тип вместо any и отобразить приходящие данные
const FriendMessage = (props: MessagePropsType) => {
    return (
        <div
            id={'hw1-friend-message-' + props.message.id}
            className={s.friendMessage}
        >
            <div className={s.friendImageAndText}>
                <img src={friendMessage0.user.avatar}
                    id={'hw1-friend-avatar-' + props.message.id}
                    // создаёт студент


                    //
                />
                <div className={s.friendText}>
                    <div
                        id={'hw1-friend-name-' + props.message.id}
                        className={s.friendName}
                    >
                        {friendMessage0.user.name}

                        {/**/}
                    </div>
                    <pre
                        id={'hw1-friend-text-' + props.message.id}
                        className={s.friendMessageText}
                    >
                        {friendMessage0.message.text}

                        {/**/}
                    </pre>
                </div>
            </div>
            <div
                id={'hw1-friend-time-' + props.message.id}
                className={s.friendTime}
            >
                {friendMessage0.message.time}

                {/**/}
            </div>
        </div>
    )
}

export default FriendMessage
