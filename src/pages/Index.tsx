import { Separator } from "@/components/ui/separator";
import dennisMiano from "@/assets/dennis-miano.webp";

const principles = [
  {
    number: "01",
    title: "Trust your Inner God",
    content: [
      "There is an intelligence above logic.",
      "Call it instinct, intuition, sixth sense or whatever.",
      "It's your higher self that sees what the mind cannot.",
      "It aligns people, circumstances and events with a precision that no amount of human planning can ever achieve!"
    ]
  },
  {
    number: "02",
    title: "Focus to master",
    content: [
      "Mastery demands obsession.",
      "No leverage exists without mastery.",
      "Choose one path. One skill. One goal. And go deep.",
      "Take it from me; you'll never succeed unless you focus on one thing first!"
    ]
  },
  {
    number: "03",
    title: "Act as if",
    content: [
      "Certainty collapses timelines.",
      "In all you do, see the end before you begin.",
      "Call it manifestation, law of attraction, affirmations, or whatever.",
      "Just Act as if. Set a goal, visualize to when you achieve the goal, then start!"
    ]
  },
  {
    number: "04",
    title: "Know your Signal vs Noise",
    content: [
      "Learn to obey Pareto Principle.",
      "Focus on the vital 20% that account for 80% of results.",
      "That is the signal - the small set of moves that actually shift reality.",
      "Everything else is noise - Distraction disguised as effort, activity mistaken for progress!"
    ]
  },
  {
    number: "05",
    title: "Urgency, Discipline & Consistency",
    content: [
      "Urgency creates momentum.",
      "Discipline preserves it when motivation fades.",
      "Consistency compounds it over time until it pays off.",
      "Money loves speed. The faster you act on an idea, the quicker you learn, adapt, and capitalize on opportunities. Poverty loves waiting, overthinking, missed chances, and indecision. Speed doesn't mean recklessness, it means execution with urgency discipline and consistency. Either take the risk or work for someone who does!"
    ]
  },
  {
    number: "06",
    title: "Have Ruthless work ethic",
    content: [
      "Blood, sweat, and tears.",
      "Work so hard that failure is impossible.",
      "Energy attracts luck and effort attracts favor.",
      "Pay the price!"
    ]
  }
];

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="absolute top-6 right-6 z-20 flex flex-col items-center gap-2">
        <img
          src={dennisMiano}
          alt="Dennis Miano"
          className="h-16 w-16 rounded-full object-cover border-2 border-primary/30 md:h-20 md:w-20"
        />
        <p className="font-display text-sm font-medium text-foreground md:text-base">Dennis Miano</p>
      </header>
      {/* Hero Section */}
      <section className="relative flex min-h-[60vh] flex-col items-center justify-center px-6 py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="relative z-10 max-w-3xl text-center">
          <h1 className="font-display text-4xl font-medium leading-tight text-foreground md:text-6xl lg:text-7xl">
            Listen
          </h1>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <div className="h-16 w-px bg-gradient-to-b from-primary/50 to-transparent" />
        </div>
      </section>

      {/* Principles Section */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="space-y-0">
          {principles.map((principle, index) => (
            <article
              key={principle.number}
              className="group"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="py-16 transition-all duration-500">
                <div className="mb-8 flex items-baseline gap-6">
                  <span className="font-display text-5xl font-light text-primary/30 md:text-7xl">
                    {principle.number}
                  </span>
                  <h2 className="font-display text-2xl font-medium text-foreground md:text-4xl">
                    {principle.title}
                  </h2>
                </div>
                <div className="ml-0 space-y-3 md:ml-24">
                  {principle.content.map((line, lineIndex) => (
                    <p
                      key={lineIndex}
                      className={`font-body text-lg leading-relaxed md:text-xl ${
                        lineIndex === principle.content.length - 1
                          ? "font-medium text-primary"
                          : "text-muted-foreground"
                      }`}
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
              {index < principles.length - 1 && (
                <Separator className="bg-border/50" />
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-display text-3xl font-medium text-primary md:text-5xl">
            Cheers!
          </p>
          <p className="mt-6 font-display text-xl italic text-muted-foreground md:text-2xl">
            — Dennis Miano
          </p>
        <div className="mt-8 h-px w-16 mx-auto bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <p className="mt-12 font-body text-base text-muted-foreground md:text-lg">
            Remember: Your purpose is not what you do. It's what happens to people when you do what you do.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
