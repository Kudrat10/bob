import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Page() {
  const kaggleDatasetURL = "https://www.kaggle.com/datasets/siddharthkumarsah/plastic-bottles-image-dataset/data";
  const graphURL = "https://www.kaggle.com/datasets/siddharthkumarsah/plastic-bottles-image-dataset/data";
  const chatbotURL = "https://colab.research.google.com/drive/1HB4cpblqOvHrG9YtAmD5-xdCszdUf8Iu?usp=sharing";

  return (
    <div className="min-h-screen bg-gray-900 text-white p-10 space-y-8">
      <div className="text-center">
        <img src="https://upload.wikimedia.org/wikipedia/en/f/fe/Srmseal.png" alt="SRM Logo" className="mx-auto h-24" />
        <h1 className="text-3xl font-bold mt-4">
          CENTRE OF EXCELLENCE FOR AGENTIC TWINS; AGENTIC AI, DIGITAL TWIN AND METAVERSE
        </h1>
        <h2 className="text-lg mt-2">DRIVEN AND CO FUNDED BY INDUSTRIAL AI ACCELERATION NEXUS, SRM UNIVERSITY, INDIA</h2>
        <p className="text-sm mt-2">Created by : George J Alexander <br /> Kudrat Anand</p>
      </div>

      <motion.h2 className="text-center text-2xl font-bold" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
        “AI Architects in Action”
      </motion.h2>

      <motion.p className="text-center max-w-3xl mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
        This ‘BOB THE BUILDER’ chatbot is designed to help students explore and redesign an unsustainable product. Through guided prompts and interactions, you will analyze, critique, and reconstruct the product to solve the specific issue of redesigning the bottle nozzle.
      </motion.p>

      <div className="space-y-6">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold">BEGIN ACTIVITY:</h3>
            <p className="mt-2"><strong>STEP 1:</strong> <a href={kaggleDatasetURL} target="_blank" className="text-blue-400 underline">Access the Kaggle Dataset</a></p>
            <p className="mt-2"><strong>STEP 2:</strong> EDA (Exploratory Data Analysis) - Understanding key features such as size, angle, sustainability issues, material, etc.</p>
            <p className="mt-2"><strong>STEP 3:</strong> <a href={graphURL} target="_blank" className="text-blue-400 underline">View Graphical Results</a></p>
            <p className="mt-2"><strong>STEP 4:</strong> Statistical analysis of bottle nozzle characteristics (size, design, material, sustainability concerns).</p>
            <p className="mt-2"><strong>STEP 5:</strong> <a href={chatbotURL} target="_blank" className="text-blue-400 underline">Interact with the Chatbot</a></p>
            <p className="mt-2"><strong>STEP 6:</strong> Submit your output below:</p>
            <textarea className="w-full p-3 mt-2 rounded bg-gray-800 text-white" placeholder="Write your findings here..."></textarea>
            <Button className="mt-3 bg-blue-500">Submit</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
