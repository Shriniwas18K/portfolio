import { RevealOnScroll } from '../RevealOnScroll';

export const Contact = () => {
    const email = 'sharqawycs@example.com';

    // Quick message templates for email
    const quickMessages = [
        {
            text: 'Interested in collaborating!',
            subject: 'Collaboration Inquiry',
            body: "Hi, I came across your portfolio and would love to collaborate on a project. Let's discuss further!",
        },
        {
            text: 'Need help with a project',
            subject: 'Project Assistance',
            body: "Hello, I'm currently working on a project and would love your input. Can we connect?",
        },
        {
            text: 'Just wanted to say hello!',
            subject: 'Hello!',
            body: 'Hey there! I found your work really inspiring and just wanted to say hi.',
        },
        {
            text: 'Freelance Work Inquiry',
            subject: 'Freelance Opportunity',
            body: "Hi, I'm looking for a developer to help with a project. Are you available for freelance work?",
        },
        {
            text: 'Join our team!',
            subject: 'Job Opportunity',
            body: "Hello, we're interested in hiring a developer with your skill set. Let's discuss this opportunity!",
        },
        {
            text: 'Can you mentor me?',
            subject: 'Mentorship Request',
            body: "Hey, I'm an aspiring developer and would love to learn from you. Would you be open to mentoring me?",
        },
    ];

    return (
        <RevealOnScroll>
            <section
                id="contact"
                className="min-h-screen flex items-center justify-center py-20">
                <div className="max-w-4xl  px-4 ">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#3399FF] to-[#0077CC] bg-clip-text text-transparent text-center">
                        {' '}
                        Get In Touch
                    </h2>

                    <div className="flex justify-center gap-8 text-3xl mb-6 rounded-xl p-8 border-[#999999]/50 border hover:-translate-y-1 transition-all">
                        <a
                            href="https://github.com/your-username"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 dark:text-white hover:text-[#0077CC] transition">
                            {/* <FaGithub /> */}
                        </a>
                        <a
                            href="https://linkedin.com/in/your-username"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-[#0077CC] transition">
                            {/* <FaLinkedin /> */}
                        </a>
                        <a
                            href="https://twitter.com/your-username"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-[#0077CC] transition">
                            {/* <FaTwitter /> */}
                        </a>
                        <a
                            href={`mailto:${email}`}
                            className="text-red-500 hover:text-[#0077CC] transition">
                            {/* <FaEnvelope /> */}
                        </a>
                    </div>
                    {/* Quick Messages */}
                    <div className="flex flex-wrap justify-center gap-4 rounded-xl p-8 border-[#999999]/50 border hover:-translate-y-1 transition-all">
                        {quickMessages.map((msg, index) => (
                            <button
                                key={index}
                                href={`mailto:${email}?subject=${encodeURIComponent(msg.subject)}&body=${encodeURIComponent(msg.body)}`}
                                className="bg-[#0077CC] text-[#EEEEEE] px-6 py-3 rounded-full 
                                            font-medium transition relative overflow-hidden
                                            hover:-translate-y-0.2 hover:shadow-[0_0_15px_#0077CC]">
                                {msg.text}
                            </button>
                        ))}
                    </div>
                </div>
            </section>
        </RevealOnScroll>
    );
};
