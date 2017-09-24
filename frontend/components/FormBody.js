import React from "react";

const FormBody = ({items}) => (
  <form className="card-body">
    {
      items.map((item, i) => {
        if (item.type === "checkbox") {
          return (
            <div className="form-check">
              <label className="form-check-label">
                <input type="checkbox" className="form-check-input"/>
                {item.label}
              </label>
            </div>
          )
        } else {
          return  (
            <div className="form-group">
              <label for={i}>{item.label}</label>
              <input type={item.type} className="form-control" id={i} placeholder={item.placeholder}/>
              <small className="form-text text-muted">
                {item.help}
              </small>
            </div>
          )
        }
      })
    }
  </form>
)

export default FormBody;
