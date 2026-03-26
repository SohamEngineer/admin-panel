import React from 'react'
import { Card, CardFooter, CardHeader } from '../../components/ui/card'
import { sectionCardsData } from '@/src/data/dashboard/section-card'
import Image from 'next/image'

function Newrelease() {
  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="mb-4 flex items-center justify-between px-4">
        <p className="text-2xl font-bold">New Released</p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 lg:grid-cols-5">
        {sectionCardsData.map((card) => (
          <Card key={card.id} className="overflow-hidden py-3 gap-3">
            <CardHeader className="px-3 max-w-80 h-full">
              <Image
                src={card.image}
                alt={card.title}
                width={400}
                height={160}
                className="h-40 w-full rounded-xl object-cover"
                priority={false}
              />
            </CardHeader>

            <CardFooter className="flex flex-col items-start">
              <p className="text-sm font-semibold">{card.title}</p>
              <p className="text-xs text-muted-foreground">
                {card.artist}
              </p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Newrelease