import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useTranslation } from "react-i18next";
import { v4 as uuidv4 } from "uuid";
import ModalHeader from "./Mixins/ModalHeader";
import PropTypes from "prop-types";
const RulesModal = ({ show, handleClose }) => {
  const { t } = useTranslation();
  return (
    <Modal show={show} onHide={handleClose}>
      <ModalHeader title={t("modals.rules.title")} />
      <Modal.Body>
        {Array.from({ length: 5 }, (_, i) => (
          <p key={uuidv4()}>{t(`modals.rules.rule${i + 1}`)}</p>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          {t("modals.rules.buttonClose")}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

RulesModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default RulesModal;
