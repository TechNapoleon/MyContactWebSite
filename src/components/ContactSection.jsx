import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";

export const ContactSection = () => {

    const handleSubmit = (e) => {
        e.preventDefault()


        setTimeout(() => {
            alert("Message sent! I'll get back to you soon.")
        },1500)
    }

    return ( 
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get in <span className="text-primary">Touch</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    I'm currently looking for new opportunities. If you'd like to get in touch, feel free to reach out!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">Contact Me</h3>

                        <div className="space-y-6 flex flex-col items-left">
                            <div className="flex flex-col items-center md:flex-row md:items-center md:space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-center md:text-left mt-3 md:mt-0">
                                    <h4 className="font-medium">Email</h4>
                                    <a
                                    href="mailto:georgy1230@gmail.com"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                    georgy1230@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex flex-col items-center md:flex-row md:items-center md:space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-center md:text-left mt-3 md:mt-0">
                                    <h4 className="font-medium"> Phone</h4>
                                    <a href="tel:+972547867647" className="text-muted-foreground hover:text-primary transition-colors">
                                        +972-547867647
                                    </a>
                                </div>
                            </div>
                            <div className="flex flex-col items-center md:flex-row md:items-center md:space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-center md:text-left mt-3 md:mt-0">
                                    <h4 className="font-medium">Location</h4>
                                    <a className="text-muted-foreground hover:text-primary transition-colors">
                                        Tel-Aviv, Israel
                                    </a>
                                </div>
                            </div>
                        </div>


                        <div className="pt-8">
                            <h4 className="font-medium mb-4">Connect With Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="https://www.linkedin.com/in/georgyf/" target="_blank">
                                    <Linkedin/>
                                </a>
                                <a href="https://github.com/TechNapoleon" target="_blank">
                                    <Github/>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6"> Send a Message </h3>

                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2"> Your Name</label>
                                <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                placeholder="Israel Israely"
                                
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2"> Your Email</label>
                                <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                placeholder="israel1948@gmail.com"
                                
                                />
                            </div>

                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2"> Your Message</label>
                                <textarea
                                id="message"
                                name="message"
                                required
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                placeholder="Hello, I'd like to talk about..."
                                
                                />
                            </div>

                            <button type="submit" className="cosmic-button w-full flex items-center justify-center gap-2">
                                Send Message
                                <Send size={16} />
                            </button>


                        </form>

                    </div>



                </div>
            </div>
        </section>
    );
};