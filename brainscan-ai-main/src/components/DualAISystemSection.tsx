import { useMemo, useState } from "react";
import { Activity, AlertTriangle, Brain, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";

const clamp = (value: number, min = 0, max = 100) => Math.min(max, Math.max(min, value));

const DualAISystemSection = () => {
  const [age, setAge] = useState("45");
  const [familyHistory, setFamilyHistory] = useState(false);
  const [smokingYears, setSmokingYears] = useState("0");

  const [tumorSize, setTumorSize] = useState("14");
  const [edemaLevel, setEdemaLevel] = useState("2");
  const [textureScore, setTextureScore] = useState("70");

  const riskScore = useMemo(() => {
    const ageNumber = Number(age) || 0;
    const smokingNumber = Number(smokingYears) || 0;

    const score =
      ageNumber * 0.6 +
      smokingNumber * 1.1 +
      (familyHistory ? 18 : 0);

    return clamp(Math.round(score));
  }, [age, smokingYears, familyHistory]);

  const detectionScore = useMemo(() => {
    const size = Number(tumorSize) || 0;
    const edema = Number(edemaLevel) || 0;
    const texture = Number(textureScore) || 0;

    const probability = size * 2.4 + edema * 9 + texture * 0.35;
    return clamp(Math.round(probability));
  }, [tumorSize, edemaLevel, textureScore]);

  const riskLabel = riskScore > 70 ? "High" : riskScore > 40 ? "Moderate" : "Low";
  const detectionLabel = detectionScore > 75 ? "Likely Tumor" : detectionScore > 50 ? "Suspicious" : "Low Suspicion";

  return (
    <section id="dual-ai-system" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-12">
          <Badge className="mb-4">Interactive Website Demo</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Dual AI Healthcare System for Brain Cancer</h2>
          <p className="text-muted-foreground text-lg">
            This website prototype includes two AI modules: one for population-level risk prediction,
            and one for MRI-based tumor detection support.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-primary" /> AI Risk Prediction</CardTitle>
              <CardDescription>Estimate patient-level risk using demographics and lifestyle factors.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="age">Age</Label>
                <Input id="age" type="number" min="1" max="110" value={age} onChange={(event) => setAge(event.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="smoking">Smoking history (years)</Label>
                <Input id="smoking" type="number" min="0" max="80" value={smokingYears} onChange={(event) => setSmokingYears(event.target.value)} />
              </div>
              <label className="flex items-center justify-between p-3 border rounded-md cursor-pointer">
                <span className="font-medium">Family history of cancer</span>
                <input
                  type="checkbox"
                  checked={familyHistory}
                  onChange={(event) => setFamilyHistory(event.target.checked)}
                  className="h-4 w-4"
                />
              </label>

              <Button className="w-full" type="button">Run Risk AI</Button>

              <div className="space-y-2 pt-3">
                <div className="flex items-center justify-between text-sm">
                  <span>Risk score</span>
                  <span className="font-semibold">{riskScore}% · {riskLabel}</span>
                </div>
                <Progress value={riskScore} />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Brain className="h-5 w-5 text-primary" /> AI Tumor Detection</CardTitle>
              <CardDescription>Simulate MRI lesion analysis and tumor probability scoring.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="tumor-size">Lesion diameter (mm)</Label>
                <Input id="tumor-size" type="number" min="0" max="120" value={tumorSize} onChange={(event) => setTumorSize(event.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edema">Peritumoral edema level (0-5)</Label>
                <Input id="edema" type="number" min="0" max="5" value={edemaLevel} onChange={(event) => setEdemaLevel(event.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="texture">Texture anomaly score</Label>
                <Input id="texture" type="number" min="0" max="100" value={textureScore} onChange={(event) => setTextureScore(event.target.value)} />
              </div>

              <Button className="w-full" variant="secondary" type="button">Run Detection AI</Button>

              <div className="space-y-2 pt-3">
                <div className="flex items-center justify-between text-sm">
                  <span>Tumor probability</span>
                  <span className="font-semibold">{detectionScore}% · {detectionLabel}</span>
                </div>
                <Progress value={detectionScore} />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 rounded-lg border bg-background p-4 text-sm text-muted-foreground flex gap-3">
          <AlertTriangle className="h-4 w-4 mt-0.5 text-amber-500" />
          <p>
            Educational demo only. Not a real medical diagnosis. Clinical decisions must be reviewed by qualified radiologists and oncologists.
          </p>
        </div>

        <div className="mt-6 flex items-center gap-6 text-sm text-muted-foreground">
          <span className="flex items-center gap-2"><Activity className="h-4 w-4 text-primary" /> Risk model output in &lt;1s</span>
          <span className="flex items-center gap-2"><Brain className="h-4 w-4 text-primary" /> Detection pipeline simulation</span>
        </div>
      </div>
    </section>
  );
};

export default DualAISystemSection;
