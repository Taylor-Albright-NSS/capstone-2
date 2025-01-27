import { Button, Card, CardBody, CardImg, CardTitle, Container } from "reactstrap"
import { OpenAI } from "openai";

export const Testing = () => {

    
    const handleOpenAITest = () => {
    const openai = new OpenAI({
        apiKey: "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",
        dangerouslyAllowBrowser: true
      });
      
      const completion = openai.chat.completions.create({
        model: "gpt-4o-mini",
        store: true,
        messages: [
          {"role": "user", "content": "write a haiku about ai"},
        ],
      });
      
          completion.then((result) => console.log(result.choices[0].message));
      }

    console.log("TEST")
    return (
            <Card className="border-test mx-4 my-4 enemy-card" style={{maxWidth: "200px", maxHeight: "260px"}}>
                <CardBody className="d-flex flex-column align-items-center">
                    <Button onClick={handleOpenAITest}>TEST ME</Button>
                Testing
                </CardBody>
            </Card>
    )
}