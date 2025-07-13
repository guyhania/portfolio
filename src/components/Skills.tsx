import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import metadata from "@/data/metadata.json";
import * as simpleIcons from 'simple-icons';
import { SVGProps } from 'react';

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
                      {category.items.map((skill: { name: string; icon: string; href?: string }) => {
                        const iconObj = (simpleIcons as any)[`si${skill.icon.charAt(0).toUpperCase() + skill.icon.slice(1)}`] || (simpleIcons as any)[skill.icon];
                        // // If you have a local SVG, use <img src=...>, otherwise use inline SVG from simple-icons
                        // const iconUrl = `/assets/tech/${skill.icon}.svg`;
                        return (
                          <a
                            key={skill.name}
                            className="flex cursor-pointer items-center gap-2 rounded-md border border-black/10 px-2 py-1 font-mono font-medium text-neutral-500 duration-200 hover:bg-black/5 motion-reduce:transition-none dark:border-neutral-800 dark:text-white/50 dark:hover:border-neutral-700 dark:hover:bg-white/5"
                            href={skill.href || '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {iconObj && (
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                aria-hidden="true"
                              >
                                <path d={iconObj.path} fill={`#${iconObj.hex}`} />
                              </svg>
                            )}
                            <span>{skill.name}</span>
                          </a>
                        );
                      })}
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