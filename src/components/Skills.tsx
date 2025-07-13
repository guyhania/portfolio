import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import metadata from "@/data/metadata.json";

export function Skills() {
  const { skills } = metadata;

  return (
    <section id="skills" className="mt-8">
      <Carousel className="w-full max-w-md mx-auto">
        <CarouselContent>
          {skills.map((category, idx) => (
            <CarouselItem key={category.category}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <h3 className="text-lg font-semibold mb-4 text-zinc-800 dark:text-zinc-200">{category.category}</h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {category.items.map((skill: string) => (
                        <Badge key={skill} variant="secondary" className="text-base px-3 py-1">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
} 