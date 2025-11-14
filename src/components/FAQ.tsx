import Accordion from './Accordion'
import SectionTitle from './SectionTitle';

const FAQ = () => {
    return (
        <section className="pb-16 flex flex-col items-center justify-center w-full">
            <div className="text-center mb-12 w-full">
                <SectionTitle>
                    Frequently Asked&nbsp;Questions
                </SectionTitle>
                <p className="text-gray-600 text-xs">Find answers to common questions about my services</p>
            </div>

            <div className="space-y-0 max-w-4xl  px-8">
                <Accordion title="What is included in the Holistic Body Transformation program?">
                    The Holistic Body Transformation program is a comprehensive approach that includes personalized workout plans,
                    nutrition guidance, lifestyle coaching, and ongoing support. We focus on sustainable changes that transform
                    not just your body, but your overall health and wellness.
                </Accordion>

                <Accordion title="How long does it take to see results?">
                    Most clients start noticing changes within 2-4 weeks, with significant transformations visible after 8-12 weeks.
                    However, results vary based on individual goals, commitment, and starting point. I work with you to set realistic
                    expectations and celebrate every milestone along the way.
                </Accordion>

                <Accordion title="Is the Post-Pregnancy Transformation program safe?">
                    Absolutely! The Post-Pregnancy Transformation program is specifically designed with postpartum recovery in mind.
                    I recommend waiting until you have your doctor's clearance (typically 6-8 weeks postpartum, or longer for C-sections).
                    The program focuses on gradual progression and core rehabilitation to ensure safe and effective recovery.
                </Accordion>

                <Accordion title="Do I need gym equipment or a gym membership?">
                    Not necessarily! I can create programs that work with whatever equipment you have available, from fully equipped
                    gyms to minimal home setups. Many exercises can be adapted to use bodyweight, resistance bands, or common household items.
                </Accordion>

                <Accordion title="How often will we meet or communicate?">
                    Communication frequency depends on your chosen program. Typically, we have weekly check-ins via WhatsApp or video call,
                    monthly progress assessments, and you'll have ongoing support through messaging for any questions or concerns that arise.
                </Accordion>

            </div>
        </section>
    )
}

export default FAQ;
