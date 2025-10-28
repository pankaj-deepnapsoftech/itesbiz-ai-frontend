import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQ = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqData = [
    {
      category: "Production Automation Software",
      questions: [
        {
          question: "What is Production Automation Software?",
          answer: "Production Automation Software is a digital system that automates, monitors, and optimizes manufacturing processes in real time. It helps reduce manual intervention, improve efficiency, and ensure consistent product quality."
        },
        {
          question: "How does Production Automation Software work?",
          answer: "It connects machines, sensors, and systems across the production floor. By collecting real-time data, it automates decision-making processes such as scheduling, maintenance, and quality control."
        },
        {
          question: "What are the main benefits of using Production Automation Software?",
          answer: "Key benefits include higher productivity, reduced downtime, improved quality, better resource utilization, and real-time visibility into manufacturing operations."
        },
        {
          question: "Is Production Automation Software suitable for small and medium-sized manufacturers?",
          answer: "Yes. Modern solutions like Itsybizz are scalable and can be customized for SMEs, offering affordable automation without needing complex infrastructure."
        },
        {
          question: "How does automation software improve production efficiency?",
          answer: "It continuously analyzes data from machines and processes, identifies bottlenecks, and adjusts workflows automatically to maintain optimal output."
        },
        {
          question: "Can Production Automation Software help reduce downtime?",
          answer: "Absolutely. It uses predictive maintenance and real-time alerts to detect potential issues early, preventing costly unplanned stoppages."
        },
        {
          question: "What technologies power modern Production Automation Software?",
          answer: "Core technologies include the Internet of Things (IoT), Artificial Intelligence (AI), Machine Learning, Cloud Computing, and Data Analytics."
        },
        {
          question: "How does real-time data enhance manufacturing performance?",
          answer: "Real-time data provides instant insights into production lines, allowing managers to make quick, informed decisions that improve efficiency and reduce waste."
        },
        {
          question: "What is the difference between MES and Production Automation Software?",
          answer: "MES (Manufacturing Execution System) tracks and manages production, while automation software focuses on executing and optimizing processes automatically. Integrated together, they deliver complete factory control."
        },
        {
          question: "Can automation software integrate with ERP or existing systems?",
          answer: "Yes. Advanced platforms like Itsybizz offer seamless integration with ERP, MES, and other enterprise systems for unified operations and reporting."
        },
        {
          question: "How does Production Automation Software support predictive maintenance?",
          answer: "It monitors machine performance in real time, identifies wear or anomalies, and schedules maintenance before failures occur, reducing downtime and repair costs."
        },
        {
          question: "What role does AI play in production automation?",
          answer: "AI analyzes large datasets to detect patterns, predict problems, and make autonomous decisions that improve production quality and resource utilization."
        },
        {
          question: "Is Production Automation Software secure?",
          answer: "Yes. Reputable solutions use encrypted data transmission, role-based access control, and cloud security protocols to safeguard sensitive production data."
        },
        {
          question: "How long does it take to implement Production Automation Software?",
          answer: "Implementation time depends on factory size and system complexity. Most businesses can start seeing results within a few weeks to a few months after deployment."
        },
        {
          question: "What is the ROI of Production Automation Software?",
          answer: "Companies typically experience a return on investment through reduced downtime, increased throughput, and lower operational costs within 6–12 months."
        },
        {
          question: "How does automation software improve quality control?",
          answer: "By integrating sensors and AI, it identifies defects in real time, enabling corrective action before products move further in the production line."
        },
        {
          question: "Can the software provide remote access and monitoring?",
          answer: "Yes. Cloud-enabled platforms allow managers to monitor and control production lines from anywhere, using secure dashboards and mobile apps."
        },
        {
          question: "How does Production Automation Software help in sustainability?",
          answer: "It optimizes energy usage, reduces material waste, and ensures efficient resource utilization, contributing to greener, eco-friendly manufacturing."
        },
        {
          question: "What industries can benefit from Production Automation Software?",
          answer: "Industries such as automotive, electronics, food & beverage, pharmaceuticals, textiles, and heavy engineering all benefit from production automation."
        },
        {
          question: "Why choose Itsybizz for real-time production automation?",
          answer: "Itsybizz offers live machine monitoring, smart alerts, predictive maintenance, ERP/MES integration, and intuitive dashboards, empowering manufacturers to achieve Industry 4.0-level efficiency with ease."
        }
      ]
    },
    {
      category: "Industrial IoT (IIoT)",
      questions: [
        {
          question: "What is Industrial IoT (IIoT) and how does it benefit manufacturing?",
          answer: "Industrial IoT (IIoT) connects machines, sensors, and systems to the internet to collect and analyze real-time data. It helps manufacturers reduce downtime, optimize performance, and make data-driven decisions for improved efficiency and cost savings."
        },
        {
          question: "Can IoT technology be added to old or legacy machines?",
          answer: "Yes. IoT retrofitting allows older machines to become \"smart\" by using sensors and gateways that capture performance data without replacing the entire system."
        },
        {
          question: "How does IoT help monitor machine performance in real time?",
          answer: "IoT sensors continuously collect data such as temperature, vibration, and production speed. This information is analyzed in real time to detect performance issues, predict maintenance needs, and prevent breakdowns."
        },
        {
          question: "What are the benefits of connecting PLC-based machines to an IoT platform?",
          answer: "Connecting PLC-based machines to IoT platforms enables centralized monitoring, improved automation, remote diagnostics, and data analytics that enhance production efficiency."
        },
        {
          question: "How can IoT reduce unplanned downtime in factories?",
          answer: "IoT systems use predictive maintenance — analyzing equipment data to identify potential failures before they happen. This allows maintenance teams to act proactively instead of reactively."
        },
        {
          question: "What kind of data can be collected through IoT in manufacturing?",
          answer: "IoT systems collect a wide range of data, including machine utilization, energy consumption, temperature, pressure, cycle time, and overall equipment efficiency (OEE)."
        },
        {
          question: "How does IoT improve product quality on the production line?",
          answer: "By monitoring every stage of production in real time, IoT helps detect deviations or defects early, ensuring higher product consistency and reducing waste."
        },
        {
          question: "Is IoT suitable only for large manufacturing plants?",
          answer: "No. IoT solutions are scalable and can be customized for small, medium, or large manufacturers, helping each improve operations at their own pace and budget."
        },
        {
          question: "What are the security concerns related to Industrial IoT?",
          answer: "Since IoT devices transmit sensitive production data, cybersecurity is crucial. Using encrypted communication, secure cloud services, and regular updates helps protect systems from unauthorized access."
        },
        {
          question: "How can IoT help in energy management?",
          answer: "IoT systems monitor energy usage across machines and processes, identifying inefficiencies and helping reduce power consumption and costs."
        },
        {
          question: "What is the difference between IoT and smart factory automation?",
          answer: "IoT focuses on connecting devices and collecting data, while smart factory automation uses that data along with AI and analytics to make real-time, intelligent decisions that optimize production."
        },
        {
          question: "Can IoT platforms work with existing ERP or MES systems?",
          answer: "Yes. Modern IoT platforms can integrate with ERP, MES, and SCADA systems to synchronize production data, enhance visibility, and streamline workflows."
        },
        {
          question: "How does real-time monitoring support production managers?",
          answer: "It provides instant access to machine performance dashboards, allowing managers to spot bottlenecks, monitor KPIs, and make faster operational decisions."
        },
        {
          question: "How does IoT contribute to predictive maintenance?",
          answer: "IoT continuously tracks machine health parameters and uses analytics to predict when parts will fail, reducing emergency repairs and maintenance costs."
        },
        {
          question: "What role does cloud computing play in Industrial IoT?",
          answer: "The cloud acts as a central hub for data storage and processing, enabling remote access, large-scale analytics, and collaboration across multiple factory sites."
        },
        {
          question: "How can IoT improve overall equipment efficiency (OEE)?",
          answer: "IoT tracks machine availability, performance, and quality metrics to identify inefficiencies. Insights from this data help improve uptime and productivity."
        },
        {
          question: "What are the first steps to start implementing IoT in a factory?",
          answer: "Start with identifying key machines or processes to monitor, select suitable sensors or gateways, and use an IoT platform to visualize and analyze the collected data."
        },
        {
          question: "Can IoT systems send alerts or notifications for equipment issues?",
          answer: "Yes. IoT systems can automatically trigger alerts via SMS, email, or dashboards when anomalies or performance drops are detected, enabling quick corrective action."
        },
        {
          question: "How does IoT support sustainability and green manufacturing?",
          answer: "IoT helps reduce energy waste, monitor resource usage, and optimize production efficiency — contributing to more sustainable and eco-friendly operations."
        },
        {
          question: "What trends are shaping the future of Industrial IoT?",
          answer: "Key trends include the rise of edge computing, AI-based analytics, digital twins, and 5G connectivity, all aimed at enabling faster, smarter, and more autonomous factories."
        }
      ]
    },
    {
      category: "Customer Relationship Management (CRM)",
      questions: [
        {
          question: "What is Customer Relationship Management (CRM)?",
          answer: "Customer Relationship Management (CRM) is a strategy and software system that helps businesses manage interactions with customers, streamline processes, and improve relationships. It centralizes customer data, tracks communication, and enhances customer satisfaction and loyalty."
        },
        {
          question: "Why is CRM important for businesses?",
          answer: "CRM helps businesses understand customer needs, improve service, and increase sales. It enables better communication, ensures timely follow-ups, and provides insights that drive informed business decisions, ultimately boosting revenue and retention."
        },
        {
          question: "What are the main features of a CRM system?",
          answer: "Key CRM features include: Contact and lead management, Sales tracking and pipeline management, Email marketing and automation, Customer service ticketing, Reporting and analytics, Integration with other business tools like ERP and social media."
        },
        {
          question: "How does CRM improve customer relationships?",
          answer: "CRM improves relationships by providing a complete view of each customer's history, preferences, and interactions. Businesses can personalize communication, resolve issues faster, and proactively meet customer needs, leading to stronger trust and loyalty."
        },
        {
          question: "Can small businesses benefit from CRM?",
          answer: "Yes, small businesses can benefit greatly. CRM helps them manage growing customer bases efficiently, automate repetitive tasks, and compete with larger businesses by providing personalized service and actionable insights."
        },
        {
          question: "What is the difference between cloud-based and on-premise CRM?",
          answer: "Cloud-based CRM: Hosted online, accessible from anywhere, with lower upfront costs and automatic updates. On-premise CRM: Installed locally on company servers, offering more control and customization but requiring higher maintenance and initial investment."
        },
        {
          question: "How can CRM increase sales and revenue?",
          answer: "CRM improves sales by tracking leads, prioritizing opportunities, and automating follow-ups. It helps sales teams focus on high-value prospects, forecast accurately, and close deals faster, directly boosting revenue."
        },
        {
          question: "How does CRM integrate with marketing efforts?",
          answer: "CRM integrates with marketing tools to track campaigns, segment audiences, and personalize messages. It allows businesses to nurture leads, monitor campaign performance, and ensure marketing aligns with customer needs and behaviors."
        },
        {
          question: "What are common challenges when implementing CRM?",
          answer: "Challenges include: Resistance from staff to adopt new systems, Poor data quality or incomplete customer information, Overcomplicated processes, Lack of clear goals or strategy for CRM usage, Integration issues with existing software."
        },
        {
          question: "How can I choose the right CRM for my business?",
          answer: "Consider factors like: Business size and budget, Key features needed (sales, marketing, support), Ease of use and scalability, Integration with current tools, Vendor support and training options."
        }
      ]
    },
    {
      category: "Human Resource Management (HRM)",
      questions: [
        {
          question: "What is Human Resource Management (HRM)?",
          answer: "Human Resource Management (HRM) is the strategic approach to managing people in an organization. It involves recruiting, training, developing, and retaining employees while ensuring compliance, performance management, and employee satisfaction."
        },
        {
          question: "Why is HRM important for organizations?",
          answer: "HRM ensures that the organization attracts, develops, and retains the right talent. It improves productivity, fosters a positive workplace culture, reduces employee turnover, and aligns workforce efforts with organizational goals."
        },
        {
          question: "What are the main functions of HRM?",
          answer: "Key HRM functions include: Recruitment and staffing, Training and development, Performance management, Compensation and benefits, Employee relations and engagement, Compliance with labor laws."
        },
        {
          question: "How does HRM support employee development?",
          answer: "HRM identifies skill gaps, provides training programs, and creates career development plans. By investing in employees' growth, organizations enhance productivity, job satisfaction, and long-term retention."
        },
        {
          question: "What is the role of HRM in recruitment?",
          answer: "HRM manages the entire recruitment process, including job postings, resume screening, interviewing, and onboarding. Its goal is to attract the best talent while ensuring a smooth and compliant hiring process."
        },
        {
          question: "How does HRM improve employee engagement?",
          answer: "HRM fosters engagement by promoting clear communication, recognizing achievements, offering career growth opportunities, and ensuring employees feel valued. Engaged employees are more productive and loyal."
        },
        {
          question: "What is the difference between HRM and HRIS?",
          answer: "HRM (Human Resource Management): Focuses on people management, strategy, and policies. HRIS (Human Resource Information System): A software system that automates HR processes such as payroll, attendance, and performance tracking. HRIS supports HRM functions digitally."
        },
        {
          question: "How does HRM handle employee performance management?",
          answer: "HRM monitors, evaluates, and guides employee performance through goal-setting, appraisals, feedback, and development plans. Effective performance management aligns individual goals with organizational objectives."
        },
        {
          question: "What challenges do HR professionals face?",
          answer: "Common HR challenges include: Talent acquisition and retention, Employee engagement and motivation, Compliance with changing labor laws, Managing diversity and inclusion, Adapting to remote or hybrid work environments."
        },
        {
          question: "How can HRM contribute to organizational success?",
          answer: "By effectively managing talent, improving employee satisfaction, fostering a positive culture, and aligning workforce efforts with business goals, HRM enhances productivity, reduces turnover, and drives overall organizational growth."
        }
      ]
    }
  ];

  let questionIndex = 0;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our production automation software, 
            IoT solutions, CRM systems, and HRM services.
          </p>
        </div>

        {/* FAQ Categories */}
        {faqData.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-blue-500 pb-2">
              {category.category}
            </h2>
            
            <div className="space-y-4">
              {category.questions.map((item, itemIndex) => {
                const currentIndex = questionIndex++;
                const isOpen = openItems[currentIndex];
                
                return (
                  <div
                    key={itemIndex}
                    className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden"
                  >
                    <button
                      className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                      onClick={() => toggleItem(currentIndex)}
                    >
                      <span className="text-lg font-semibold text-gray-900 pr-4">
                        {item.question}
                      </span>
                      {isOpen ? (
                        <FaChevronUp className="text-blue-500 flex-shrink-0" />
                      ) : (
                        <FaChevronDown className="text-blue-500 flex-shrink-0" />
                      )}
                    </button>
                    
                    {isOpen && (
                      <div className="px-6 pb-4">
                        <div className="border-t border-gray-200 pt-4">
                          <p className="text-gray-700 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Contact Section */}
        <div className="mt-16 bg-blue-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Can't find the answer you're looking for? Our team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact-us"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              Contact Us
            </a>
            <a
              href="tel:+1234567890"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-colors duration-200"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
