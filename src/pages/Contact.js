import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 4rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 5rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 1rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      {/* <h2 className="common-heading">Contact page</h2> */}

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d56355.78481625843!2d73.2645991!3d28.017245!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393fdd8583c7c0e5%3A0x10ea3662d7757ac3!2sBikaner%20Gujrati%20Market!5e0!3m2!1sen!2sin!4v1703437791289!5m2!1sen!2sin"
        width="100%"
        height="350"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/mbjnrwby"
            method="POST"
            className="contact-inputs"
          >
            <input
              type="text"
              placeholder="username"
              name="username"
              required
              autoComplete="off"
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter you message"
            ></textarea>

            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
