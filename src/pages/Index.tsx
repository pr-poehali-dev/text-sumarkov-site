import { useState } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const characters = [
  { name: 'Педант' },
  { name: 'Клёртта', description: 'дочь его' },
  { name: 'Октавий', description: 'любовник ее' },
  { name: 'Перимена', description: 'педант' },
  { name: 'Ксаксоксимени', description: 'педант' },
  { name: 'Брамарбас', description: 'офицер самохвал' },
  { name: 'Ераст', description: 'забияка' },
  { name: 'Подьячий' },
  { name: 'Кимар', description: 'слуга Педанта' },
];

const scenes = [
  {
    number: 'I',
    characters: 'Педант и Клёртта',
    content: [
      { speaker: 'Клёртта', text: 'Нет, батюшка, воля ваша, лучше мне век быть в девках, нежели за Перименою. С чего вы вздумали, что он умен; никто этого об нем не говорит, кроме его самого, и хотя он и клянется, что он человек ученый, однако в этом никто ему не верит.' },
      { speaker: 'Педант', text: 'Безумная, он знает по-арапски, по-сирски, по-халдейски, да диво, не знает ли он еще и по-китайски; и на всех этих языках стихи пишет, как на русском языке.' },
      { speaker: 'Клёртта', text: 'Пускай он и по-халдейски и по-китайски знает, однако он мне со всею своею премудростью не нравится; а для любови и одного нашего языка довольно.' },
      { speaker: 'Педант', text: 'Да, тебе кажется довольно, а он не так сказывает. Он говорит, что кто не умеет по-сирски и по-халдейски, тот еще не прямой человек. Вот так-то он сказывает.' },
      { speaker: 'Клёртта', text: 'Ему такая и жена надобна, а я ни сирскому, ни халдейскому языку не училась.' },
      { speaker: 'Педант', text: 'Я тебе одним скажу словом, что я хочу, чтоб ты была за ним.' },
      { speaker: 'Клёртта', text: 'А я вам, батюшка, одним ответствую словом, что я лучше умру или в монастырь пойду, нежели буду за ним.' },
      { speaker: 'Педант', text: 'А я говорю, что я тебя за него отдам. Я пойду на часок к соседу, а ты дожидайся здесь жениха своего; он сегодня к тебе быть хотел. Да будь же с ним учтива, ежели ты хочешь, чтоб я тебя любил.' },
    ]
  },
  {
    number: 'II',
    characters: 'Клёртта',
    content: [
      { text: 'Что этого тяжеле на свете! Выдают меня за того, за кого я не хочу, и разлучают меня с тем, кого я люблю лучше жизни своей, О, возлюбленный Октавий, какую ты сердцу моему делаешь горесть! А ты, Перимена, какое ты приключаешь мне мученье. Погибни ты и с сирским и с халдейским языком, и со всею своею премудростью!' },
    ]
  },
  {
    number: 'III',
    characters: 'Клёртта и Перимена',
    content: [
      { speaker: 'Перимена', text: 'Прекрасная красота, приятная приятность, по премногу кланяюсь вам.' },
      { speaker: 'Клёртта', text: 'И я вам по премногу откланиваюсь, преученое учение.' },
      { speaker: 'Перимена', text: 'Эта бумажка яснее вам скажет, какую язву в сердце моем приятство ваше, то есть красота ваша, мне учинило, то есть сделало.', stage: '(вынув песню из кармана)' },
      { speaker: 'Клёртта', text: 'Я верю вам, сударь.' },
      { speaker: 'Перимена', text: 'Однако ж не поскучите ль послушать, а песенка сочинена очюнь, очюнь, подлинно говорю, что очюнь хорошо; да еще и хореическими, сударыня, стопами.' },
      { speaker: 'Клёртта', text: 'Очень, сударь, хорошо; я вам верю, что эта песня хороша.' },
      { speaker: 'Перимена', text: 'Она сочинена на голос: О места, места драгие. Извольте послушать; да послушайте ж, сударыня.' },
      { speaker: 'Клёртта', text: 'Боже милосердый!', stage: '(особливо)' },
      { speaker: 'Перимена', text: 'Красоту на вашу смотря, распалился я ей! ей!\nИзволь меня избавить ты от страсти тем моей!\nБровь твоя меня пронзила, голос кровь зажег,\nМучишь ты меня, Климена, и стрелою сшибла с ног.\nВидеть мне тебя есть драго,\nО богиня всей любви!\nТолько то мне есть не благо,\nЧто живешь в моей крови.', stage: '(читает)', verse: true },
      { speaker: 'Клёртта', text: 'Очень песня хороша…' },
      { speaker: 'Перимена', text: 'Изволь-ка подале послушать.' },
      { speaker: 'Клёртта', text: 'Нет, я уже довольна.' },
      { speaker: 'Перимена', text: 'Как вам это слово кажется: и не делай больше сердцу пре обидных ты обид! Не сильно ли это сказано? Изволь-ка далее-то ты послушать…' },
      { speaker: 'Клёртта', text: 'Пожалуй, не трудись для меня больше, я уже довольна.' },
      { speaker: 'Перимена', text: 'Хоть один куплет еще прочесть мне позволь.' },
      { speaker: 'Клёртта', text: 'Пожалуй мне, я сама после прочту.' },
      { speaker: 'Перимена', text: 'Изволь, красота моя, да только изволь прочесть с рассуждением. Это вить не "о места, места драгие", эту песнь и содержание ее не всяк разуметь будет; тут такие есть тонкости, что они от многих и ученых закрыты. Правда, многим покажется, что это безделка; однако позвольте, моя государыня, сказать, что в этой безделке много дела, что я аргументально доказать могу.' },
      { speaker: 'Клёртта', text: 'Я доказательств ваших не требую и до споров я не охотница.' },
    ]
  },
  {
    number: 'ПОСЛЕДНЕЕ',
    characters: 'Те ж, Октавий и Клёртта',
    content: [
      { speaker: 'Клёртта', text: 'Батюшка, отпустите мне винность мою, что вы меня обмануть себя принудили; вот мой жених, и его имя в записи написано, а не Перименино. Не жалуйте мне никакого приданого, хотя и наследства лишите, только простите мне мою вину и не разлучайте меня с тем, кто женится на мне не для богатства, да только для того, что он мил мне, а я ему мила.' },
      { speaker: 'Октавий', text: 'Я только той милости желаю, чтоб за мною дочь ваша была, а хотя вы приданого за нею и не пожалуете, я вас всегда как отца своего почитать буду.' },
      { speaker: 'Педант', text: 'Не во сне ли я это вижу?' },
      { speaker: 'Перимена', text: 'Ах! приказная душа, погубила ты меня.' },
      { speaker: 'Педант', text: 'Я тебе, Клёртта, даю благословение и половину своего имения, а как умру, то и все твое будет. А тобою я, дорогой зять, доволен. Вот, Перимена, напрасно ты мне до времени грозить стал.' },
      { speaker: 'Перимена', text: 'Я против вас наделаю сатир полтораста. А ты, Ксаксоксимени, хоть радуйся несчастью моему, только ведай, что с тем умру, что одноножное твердо треножного правильнее.' },
      { text: 'Конец', isFinal: true }
    ]
  }
];

export default function Index() {
  const [activeSection, setActiveSection] = useState<'characters' | 'text'>('characters');

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6 max-w-4xl">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2 text-primary">
              Тресотиниус
            </h1>
            <p className="text-muted-foreground text-sm md:text-base">
              Комедия Александра Петровича Сумарокова
            </p>
            <p className="text-muted-foreground text-xs mt-1">XVIII век</p>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <div className="border-b border-border bg-card/30 backdrop-blur-sm sticky top-[108px] z-40">
        <div className="container mx-auto px-4 max-w-4xl">
          <nav className="flex gap-1">
            <button
              onClick={() => setActiveSection('characters')}
              className={`flex-1 py-3 text-sm font-medium transition-colors relative ${
                activeSection === 'characters'
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon name="Users" size={16} className="inline mr-2" />
              Действующие лица
              {activeSection === 'characters' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
              )}
            </button>
            <button
              onClick={() => setActiveSection('text')}
              className={`flex-1 py-3 text-sm font-medium transition-colors relative ${
                activeSection === 'text'
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon name="BookOpen" size={16} className="inline mr-2" />
              Текст произведения
              {activeSection === 'text' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
              )}
            </button>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {activeSection === 'characters' && (
          <div className="animate-fade-in">
            <Card className="mb-8">
              <CardContent className="pt-6">
                <h2 className="text-3xl font-bold mb-6 text-center">Действующие лица</h2>
                <div className="space-y-3">
                  {characters.map((char, index) => (
                    <div key={index} className="flex items-baseline gap-3 py-2">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-accent mt-2" />
                      <div className="flex-1">
                        <span className="font-semibold text-lg">{char.name}</span>
                        {char.description && (
                          <>
                            <span className="mx-2 text-muted-foreground">—</span>
                            <span className="text-muted-foreground italic">{char.description}</span>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'text' && (
          <div className="animate-fade-in space-y-12">
            {scenes.map((scene, sceneIndex) => (
              <Card key={sceneIndex} className="overflow-hidden">
                <CardContent className="pt-6">
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-center mb-2">
                      ЯВЛЕНИЕ {scene.number}
                    </h2>
                    <p className="text-center text-muted-foreground italic text-sm">
                      {scene.characters}
                    </p>
                  </div>
                  
                  <Separator className="mb-6" />

                  <div className="space-y-6">
                    {scene.content.map((line, lineIndex) => (
                      <div key={lineIndex}>
                        {line.isFinal ? (
                          <p className="text-center font-bold text-xl mt-8 text-primary">
                            {line.text}
                          </p>
                        ) : (
                          <div className="space-y-2">
                            {line.speaker && (
                              <div className="flex items-center gap-2">
                                <span className="font-bold text-primary">
                                  {line.speaker}
                                </span>
                                {line.stage && (
                                  <span className="text-xs text-muted-foreground italic">
                                    {line.stage}
                                  </span>
                                )}
                                <span className="text-primary">.</span>
                              </div>
                            )}
                            <p className={`leading-relaxed ${
                              line.verse 
                                ? 'pl-6 italic font-light whitespace-pre-line' 
                                : line.speaker 
                                  ? 'pl-4' 
                                  : 'italic'
                            }`}>
                              {line.text}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16 py-8">
        <div className="container mx-auto px-4 max-w-4xl text-center text-sm text-muted-foreground">
          <p>Александр Петрович Сумароков (1717–1777)</p>
          <p className="mt-1">Классическая русская литература XVIII века</p>
        </div>
      </footer>
    </div>
  );
}