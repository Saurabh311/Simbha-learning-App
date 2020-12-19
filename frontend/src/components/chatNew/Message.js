import React from "react";
import { Link } from "react-router-dom";

//Render message both inbox and sent box
function Message({ message, inbox, getAllAgain, deleteMessage, user }) {
  
  const url = message.fileUrl;

  return (
    <>
      {inbox ? (
        <div className="incoming_msg" style={{ cursor: "pointer" }}>
          <div className="received_msg">
            <div className="received_withd_msg">
              <span className="sender-name">{message.sender.name}</span>
              <Link
                className="btn-reply"
                to={{
                  pathname: "/replymessage",
                  state: { replyTo: message.sender },
                }}
              >
                <i class="fa fa-reply" aria-hidden="true"></i> &nbsp;Reply
              </Link>

              {message.fileUrl === null ? (
                <p>{message.msgBody} </p>
              ) : (
                <div>
                  <p>{message.msgBody}</p>

                  <a
                    href={message.fileUrl}
                    className={
                      message.fileUrl === "" ? "show-msg" : "show-files-msg"
                    }
                  >
                    {url &&
                      (url.match(".gif") ||
                      url.match(".jpg") ||
                      url.match(".png") ||
                      url.match(".jpeg") ? (
                        <a href={message.fileUrl} target="_blank" rel="noreferrer">
                        <img
                          src={message.fileUrl}
                          class="img-fluid"
                          alt="Responsive image"
                        />
                        </a>
                      ) : (
                        <div class="embed-responsive embed-responsive-16by9">
                          <iframe
                            class="embed-responsive-item"
                            title="attachment"
                            src={message.fileUrl}
                            allowfullscreen
                          ></iframe>
                        </div>
                      ))}
                  </a>
                </div>
              )}

              <span className="time_date"> {message.date} </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="outgoing_msg">
          <div className="sent_msg">
            <span className="sender-name">{message.recipient.name}</span>

            {message.fileUrl === null ? (
              <p>{message.msgBody}</p>
            ) : (
              <div>
                <p>{message.msgBody}</p>
                <a
                  href={message.fileUrl}
                  className={
                    message.fileUrl === "" ? "show-msg" : "show-files-msg"
                  }
                >
                  {url &&
                    (url.match(".gif") ||
                    url.match(".jpg") ||
                    url.match(".png") ||
                    url.match(".jpeg") ? (
                      <a href={message.fileUrl} target="_blank" rel="noreferrer">
                      <img
                        src={message.fileUrl}
                        class="img-fluid"
                        alt="Responsive image"
                      />
                      </a>
                    ) : (
                      <div className="embed-responsive embed-responsive-16by9">
                        <iframe
                          class="embed-responsive-item"
                          src={message.fileUrl}
                          title="attachment"
                          allowfullscreen
                        ></iframe>
                      </div>
                    ))}
                </a>
              </div>
            )}

            <span className="time_date"> {message.date} </span>
          </div>
        </div>
      )}
    </>
  );
}

export default Message;
