import React from "react";
import {SiGithub, SiLinkedin} from "react-icons/si";

import Section from "./Section";
import SectionHeading from "./SectionHeading";
import Button from "./Button";

const inputStyle = "border font-sans-2 text-lg rounded-lg focus:ring-theme-light focus:border-theme-light block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-100 w-full max-w-lg";
const labelStyle = "block mb-2"

export default function Contact() {
    return (<div>
        <Section id="contact">
            <SectionHeading>Contact</SectionHeading>
            <div className="mb-8 flex space-x-6">
                <Button icon={<SiGithub/>} link="https://github.com/krisp3t">GitHub</Button>
                <Button icon={<SiLinkedin/>} link="https://www.linkedin.com/in/krispetric/">LinkedIn</Button>
            </div>
            <p className="mb-8 text-xl">Feel free to say hi! 👋</p>
            <form name="contact-form" method="POST" data-netlify="true" data-netlify-recaptcha="true"
                  className="space-y-4 pb-40">
                <input
                    type='hidden'
                    name='form-name'
                    value='contact-form'/>
                <p>
                    <label for="name" className={labelStyle}>Your Name: </label><input type="text"
                                                                                       name="name"
                                                                                       id="name"
                                                                                       className={inputStyle}
                                                                                       placeholder="John Doe"
                                                                                       required/>
                </p>
                <p>
                    <label for="email" className={labelStyle}>Your Email: </label><input type="email"
                                                                                         className={inputStyle}
                                                                                         name="email"
                                                                                         id="email"
                                                                                         placeholder="johndoe@email.com"
                                                                                         required/>
                </p>
                <p>
                    <label for="message" className={labelStyle}>Message: </label><textarea name="message"
                                                                                           id="message"
                                                                                           className={inputStyle}
                                                                                           placeholder="Your message here..."
                                                                                           rows={6}
                                                                                           required
                ></textarea>
                </p>
                <div data-netlify-recaptcha="true"></div>
                <p>
                    <Button type="submit">Send</Button>
                </p>
            </form>
        </Section>
    </div>)
}