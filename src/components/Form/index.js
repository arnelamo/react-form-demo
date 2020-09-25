import React, { useState } from 'react'
import validate from '../../helpers/validation'
import useContactForm from '../../hooks/useContactForm'
//import axios from 'axios'

const Form = () => {
  const [isSent, setIsSent] = useState()
  const [bonusOpen, setBonusOpen] = useState(false)

  // let axiosConfig = {
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // };

  const submitForm = () => {
    console.log('Success')
    /* axios.post('https://heksemel.no/case/submit.php', values, axiosConfig).then(res => console.log(res)).catch(err => console.log(err)) */
    setIsSubmitting(false)
    setIsSent(true)
  }

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    setIsSubmitting,
  } = useContactForm(submitForm, validate);

  const openBonusHandler = () => {
    setBonusOpen(!bonusOpen)
  }

  let content

  if (isSent) {
    content = (
      <div className="section is-fullheight">
        <div className="container">
          <div className="column is-6 is-offset-3">
            <div className="box">
              <p className="is-size-3">Takk!</p>
              <p>Vi har mottatt din henvendelse fra {values.email}.</p>
              <p>Du hører fra oss snart.</p>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    content = (
      <div className="section is-fullheight">
        <div className="container">
          <div className="column is-6 is-offset-3">
            <div className="box">
              <form onSubmit={handleSubmit}>
                <fieldset>
                  <legend><p className="has-text-weight-medium is-size-5 is-uppercase	mb-4">Informasjon</p></legend>
                  <div className="field">
                    <label className="label" htmlFor="name">Navn:</label>
                    <div className="control">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className={`input ${errors.name && 'is-danger'}`}
                        value={values.name}
                        onChange={handleChange}
                        placeholder="Ola Nordmann"
                      />
                      {errors.name && <p className="help is-danger">{errors.name}</p>}
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor="email">E-post:</label>
                    <div className="control">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className={`input ${errors.email && 'is-danger'}`}
                        value={values.email}
                        onChange={handleChange}
                        placeholder="navn@domene.no"
                      />
                      {errors.email && <p className="help is-danger">{errors.email}</p>}
                    </div>
                  </div>
                  <div className="columns is-desktop">
                    <div className="column is-half-desktop">
                      <div className="field">
                        <label className="label" htmlFor="phone">Telefon:</label>
                        <div className="control">
                          <input
                            type="tel"
                            name="phone"
                            id="phone"
                            className={`input ${errors.phone && 'is-danger'}`}
                            value={values.phone}
                            onChange={handleChange}
                            placeholder="XXX XX XXX"
                          />
                          {errors.phone && <p className="help is-danger">{errors.phone}</p>}
                        </div>
                      </div>
                    </div>
                    <div className="column is-half-desktop">
                      <div className="field">
                        <label className="label" htmlFor="areacode">Postnummer:</label>
                        <div className="control">
                          <input
                            type="number"
                            name="areacode"
                            id="areacode"
                            className="input"
                            value={values.areacode}
                            onChange={handleChange}
                            max="9999"
                            placeholder="1234"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor="comment">Kommentar</label>
                    <div className="control">
                      <textarea
                        name="comment"
                        id="comment"
                        className="textarea is-medium"
                        value={values.comment}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                </fieldset>
                <fieldset>
                  <legend>
                    <p
                      className="has-text-info has-text-weight-medium is-size-6 is-uppercase mt-5 mb-4"
                      onClick={openBonusHandler}
                      style={{ cursor: 'pointer' }}
                    >Bonusspørsmål</p>
                  </legend>
                  {bonusOpen && (
                    <>
                      <div>
                        <label className="label">Velg din brus:</label>
                        <div>
                          <label className="radio" htmlFor="pepsi">
                            <input type="radio" name="soda" id="pepsi" value="Pepsi" checked={values.soda === "Pepsi"} onChange={handleChange} />
                        Pepsi
                      </label>
                          <label className="radio" htmlFor="cola">
                            <input type="radio" name="soda" id="cola" value="Cola" checked={values.soda === "Cola"} onChange={handleChange} />
                        Cola
                      </label>
                        </div>
                      </div>
                      <div>
                        <label className="label">Velg din energidrikk:</label>
                        <div>
                          <label className="radio" htmlFor="redbull">
                            <input type="radio" name="energydrink" id="redbull" value="Redbull" checked={values.energydrink === "Redbull"} onChange={handleChange} />
                        Redbull
                      </label>
                          <label className="radio" htmlFor="monster">
                            <input type="radio" name="energydrink" id="monster" value="Monster" checked={values.energydrink === "Monster"} onChange={handleChange} />
                        Monster
                      </label>
                        </div>
                      </div>
                      <div>
                        <label className="label">Velg din koffeinkilde:</label>
                        <div>
                          <label className="radio" htmlFor="kaffe">
                            <input type="radio" name="caffeine" id="kaffe" value="Kaffe" checked={values.caffeine === "Kaffe"} onChange={handleChange} />
                        Kaffe
                      </label>
                          <label className="radio" htmlFor="te">
                            <input type="radio" name="caffeine" id="te" value="Te" checked={values.caffeine === "Te"} onChange={handleChange} />
                        Te
                      </label>
                        </div>
                      </div>
                    </>
                  )}
                  {/* <input type="hidden" name="applicant" value={values.applicant}/> */}
                  <button className="button is-block is-info is-fullwidth mt-4" type="submit">Send inn!</button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return content
}

export default Form