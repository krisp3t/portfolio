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
            <form name="contact" method="POST" data-netlify="true">
                <p>
                    <label>Your Name: <input type="text" name="name"/></label>
                </p>
                <p>
                    <label>Your Email: <input type="email" name="email"/></label>
                </p>
                <p>
                    <label>Your Role: <select name="role[]" multiple>
                        <option value="leader">Leader</option>
                        <option value="follower">Follower</option>
                    </select></label>
                </p>
                <p>
                    <label>Message: <textarea name="message"></textarea></label>
                </p>
                <p>
                    <button type="submit">Send</button>
                </p>
            </form>
        </Section>
    </div>)
}