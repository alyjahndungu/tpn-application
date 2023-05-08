import PropTypes from "prop-types";

const Message = ({ msg }: any) => (
  <>
    <div
      className="flex bg-red-100 rounded-lg p-4 mb-4 text-sm text-red-700"
      role="alert"
    >
      {msg}
    </div>
  </>
);

Message.propTypes = {
  msg: PropTypes.string.isRequired,
};

export default Message;
