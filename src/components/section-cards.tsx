import { TrendingDownIcon, TrendingUpIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function SectionCards() {
  return (
    <div className="max-w-[100dvw] px-4 lg:px-6 gap-4 flex flex-row items-start justify-start overflow-x-auto"
     style={{scrollbarColor: "white transparent"}}>
      {Array.from({length: 4}).map( (_, ind) => <Card key={ind} className="w-[300px] shrink-0">
        <CardHeader className="relative">
          <CardDescription className="text-card-foreground">Avaliação Média</CardDescription>
          <CardTitle className="font-semibold tabular-nums">
            <span className="text-4xl text-yellow-600 font-bold">3</span>
            <span className="text-2xl">/5</span>
          </CardTitle>
          <div className="absolute right-4 top-4">
            <Badge variant="outline" className="flex gap-1 rounded-lg text-xs">
              <TrendingUpIcon className="size-3" />
              +12.5%
            </Badge>
          </div>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Trending up this month <TrendingUpIcon className="size-4" />
          </div>
          <div className="text-card-foreground">
            Avaliações dos últimos 6 meses 
          </div>
        </CardFooter>
      </Card> )}
      
    </div>
  )
}
