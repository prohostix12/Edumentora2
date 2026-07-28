'use client';

import React, { useState, useTransition } from 'react';
import { Trash2, Plus, Upload, Type, LayoutGrid, List } from 'lucide-react';
import { createProgram, deleteProgram } from '@/app/admin/programs/actions';
import { compressImage } from '@/utils/imageCompression';

type Program = {
  id: string;
  topic: string;
  heroImage: string | null;
  heading: string;
  subHeading: string | null;
  paragraph: string;
  blocks: any[];
  createdAt: Date;
};

type Block = 
  | { type: 'text', heading: string, paragraph: string }
  | { type: 'cards', heading: string, paragraph: string, cards: { cardHeading: string, cardPara: string }[] }
  | { type: 'arrows', heading: string, paragraph: string, points: { pointHeading: string, pointList: string[] }[] };

export default function ProgramManager({ initialPrograms }: { initialPrograms: Program[] }) {
  const [isPending, startTransition] = useTransition();
  const [heroImageBase64, setHeroImageBase64] = useState<string | null>(null);
  
  // Hero Fields
  const [topic, setTopic] = useState('');
  const [heading, setHeading] = useState('');
  const [subHeading, setSubHeading] = useState('');
  const [paragraph, setParagraph] = useState('');

  // Dynamic Blocks
  const [blocks, setBlocks] = useState<Block[]>([]);

  const handleHeroImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    try {
      const compressedBase64 = await compressImage(files[0]);
      setHeroImageBase64(compressedBase64);
    } catch (error) {
      console.error("Error processing image:", error);
      alert("Failed to process image.");
    }
  };

  // Block Management Helpers
  const addTextBlock = () => setBlocks([...blocks, { type: 'text', heading: '', paragraph: '' }]);
  const addCardsBlock = () => setBlocks([...blocks, { type: 'cards', heading: '', paragraph: '', cards: [{ cardHeading: '', cardPara: '' }] }]);
  const addArrowsBlock = () => setBlocks([...blocks, { type: 'arrows', heading: '', paragraph: '', points: [{ pointHeading: '', pointList: [''] }] }]);
  
  const removeBlock = (index: number) => setBlocks(blocks.filter((_, i) => i !== index));

  const updateBlock = (index: number, updates: Partial<Block>) => {
    const newBlocks = [...blocks];
    newBlocks[index] = { ...newBlocks[index], ...updates } as Block;
    setBlocks(newBlocks);
  };

  const handleCreateProgram = (formData: FormData) => {
    formData.set('blocks', JSON.stringify(blocks));

    startTransition(async () => {
      try {
        await createProgram(formData);
        const form = document.getElementById('add-program-form') as HTMLFormElement;
        if (form) form.reset();
        setBlocks([]);
        setHeroImageBase64(null);
        setTopic('');
        setHeading('');
        setSubHeading('');
        setParagraph('');
        alert('Program created successfully!');
      } catch (error) {
        console.error(error);
        alert('Failed to create program! Ensure your server is restarted after DB changes.');
      }
    });
  };

  const handleDeleteProgram = (id: string) => {
    if (confirm('Are you sure you want to delete this program?')) {
      startTransition(() => {
        deleteProgram(id);
      });
    }
  };

  return (
    <div className="space-y-8">
      {/* Block Builder Form */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h2 className="text-xl font-semibold text-[#172A53] mb-4">Build New Program</h2>
        <form id="add-program-form" action={handleCreateProgram} className="flex flex-col gap-8">
          
          {/* HERO SECTION */}
          <div className="p-6 bg-gray-50 rounded-xl border border-gray-200 space-y-6">
            <h3 className="font-bold text-[#da251d] uppercase tracking-wider text-sm mb-4">1. Hero Section</h3>
            <input type="hidden" name="heroImage" value={heroImageBase64 || ''} />
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/3 h-48 flex flex-col items-center justify-center p-2 border-2 border-dashed border-gray-300 rounded-xl bg-white hover:bg-gray-50 transition-colors cursor-pointer relative overflow-hidden">
                {heroImageBase64 ? (
                  <>
                     <img src={heroImageBase64} alt="Preview" className="absolute inset-0 w-full h-full object-cover" />
                     <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <span className="text-white text-xs font-medium">Change Hero Image</span>
                     </div>
                  </>
                ) : (
                  <div className="flex flex-col items-center text-gray-500">
                    <Upload className="w-6 h-6 mb-2 text-gray-400" />
                    <span className="text-sm font-medium">Upload Hero Image</span>
                  </div>
                )}
                <input type="file" accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer" onChange={handleHeroImageChange} />
              </div>
              
              <div className="flex-1 space-y-4">
                <div>
                  <input type="text" name="topic" value={topic} onChange={e => setTopic(e.target.value)} placeholder="Program Topic (e.g. Apprenticeship, WILP)" required className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#172A53]/20 text-[#172A53] placeholder:text-[#172A53]/70 font-semibold" />
                </div>
                <div>
                  <input type="text" name="heading" value={heading} onChange={e => setHeading(e.target.value)} placeholder="Main Heading (e.g. Employee Apprenticeship-Learning Program)" required className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#172A53]/20 text-[#172A53] placeholder:text-[#172A53]/70" />
                </div>
                <div>
                  <input type="text" name="subHeading" value={subHeading} onChange={e => setSubHeading(e.target.value)} placeholder="Sub Heading (e.g. Convert Work Experience into Credits)" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#172A53]/20 text-[#172A53] placeholder:text-[#172A53]/70" />
                </div>
                <div>
                  <textarea name="paragraph" value={paragraph} onChange={e => setParagraph(e.target.value)} placeholder="Main Paragraph description..." required rows={3} className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#172A53]/20 resize-none text-[#172A53] placeholder:text-[#172A53]/70"></textarea>
                </div>
              </div>
            </div>
          </div>

          {/* DYNAMIC BLOCKS SECTION */}
          <div className="space-y-6">
            <h3 className="font-bold text-[#da251d] uppercase tracking-wider text-sm">2. Page Content Blocks</h3>
            
            {blocks.map((block, bIndex) => (
              <div key={bIndex} className="p-6 bg-white rounded-xl border border-[#172A53]/10 shadow-sm relative group">
                <button type="button" onClick={() => removeBlock(bIndex)} className="absolute top-4 right-4 text-gray-400 hover:text-red-500 hover:bg-red-50 p-2 rounded-lg transition-colors">
                  <Trash2 className="w-5 h-5" />
                </button>
                
                {/* Block Header Fields (Common to all blocks) */}
                <div className="pr-12 space-y-4 mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#172A53]/5 text-[#172A53] rounded-lg text-xs font-bold uppercase tracking-wider mb-2">
                    {block.type === 'text' && <><Type className="w-3 h-3" /> Text Block</>}
                    {block.type === 'cards' && <><LayoutGrid className="w-3 h-3" /> Cards Block</>}
                    {block.type === 'arrows' && <><List className="w-3 h-3" /> Arrow List Block</>}
                  </div>
                  <input 
                    type="text" 
                    placeholder="Block Heading" 
                    value={block.heading} 
                    onChange={e => updateBlock(bIndex, { heading: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-200 font-bold text-lg rounded-lg focus:outline-none focus:border-[#172A53] text-[#172A53] placeholder:text-[#172A53]/70"
                  />
                  <textarea 
                    placeholder="Block Paragraph (Optional)" 
                    value={block.paragraph} 
                    onChange={e => updateBlock(bIndex, { paragraph: e.target.value })}
                    rows={2}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#172A53] resize-none text-[#172A53] placeholder:text-[#172A53]/70"
                  />
                </div>

                {/* Block Specific Fields */}
                {block.type === 'cards' && (
                  <div className="space-y-4 pt-4 border-t border-gray-100">
                    <h4 className="text-sm font-semibold text-gray-600 mb-2">Cards Content</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {block.cards.map((card, cIndex) => (
                        <div key={cIndex} className="p-4 bg-gray-50 rounded-lg border border-gray-200 relative">
                          <button type="button" onClick={() => {
                            const newCards = [...block.cards];
                            newCards.splice(cIndex, 1);
                            updateBlock(bIndex, { cards: newCards });
                          }} className="absolute top-2 right-2 text-gray-400 hover:text-red-500">
                            <Trash2 className="w-4 h-4" />
                          </button>
                          <input type="text" placeholder="Card Heading" value={card.cardHeading} onChange={e => {
                            const newCards = [...block.cards];
                            newCards[cIndex].cardHeading = e.target.value;
                            updateBlock(bIndex, { cards: newCards });
                          }} className="w-full px-3 py-1.5 mb-2 border border-gray-200 rounded text-sm font-semibold text-[#172A53] placeholder:text-[#172A53]/70" />
                          <textarea placeholder="Card Paragraph" value={card.cardPara} onChange={e => {
                            const newCards = [...block.cards];
                            newCards[cIndex].cardPara = e.target.value;
                            updateBlock(bIndex, { cards: newCards });
                          }} rows={2} className="w-full px-3 py-1.5 border border-gray-200 rounded text-sm resize-none text-[#172A53] placeholder:text-[#172A53]/70" />
                        </div>
                      ))}
                    </div>
                    <button type="button" onClick={() => updateBlock(bIndex, { cards: [...block.cards, { cardHeading: '', cardPara: '' }] })} className="text-sm text-[#da251d] font-semibold flex items-center gap-1 hover:underline">
                      <Plus className="w-4 h-4" /> Add Card
                    </button>
                  </div>
                )}

                {block.type === 'arrows' && (
                  <div className="space-y-4 pt-4 border-t border-gray-100">
                    <h4 className="text-sm font-semibold text-gray-600 mb-2">Arrow List Items</h4>
                    <div className="space-y-4">
                      {block.points.map((point, pIndex) => (
                        <div key={pIndex} className="p-4 bg-gray-50 rounded-lg border border-gray-200 relative">
                          <button type="button" onClick={() => {
                            const newPoints = [...block.points];
                            newPoints.splice(pIndex, 1);
                            updateBlock(bIndex, { points: newPoints });
                          }} className="absolute top-2 right-2 text-gray-400 hover:text-red-500">
                            <Trash2 className="w-4 h-4" />
                          </button>
                          
                          <input type="text" placeholder="Item Heading" value={point.pointHeading} onChange={e => {
                            const newPoints = [...block.points];
                            newPoints[pIndex].pointHeading = e.target.value;
                            updateBlock(bIndex, { points: newPoints });
                          }} className="w-full px-3 py-1.5 mb-3 border border-gray-200 rounded text-sm font-semibold pr-8 text-[#172A53] placeholder:text-[#172A53]/70" />
                          
                          <div className="space-y-2 pl-4 border-l-2 border-[#172A53]/20">
                            {point.pointList.map((listItem, lIndex) => (
                              <div key={lIndex} className="flex items-center gap-2">
                                <span className="text-[#da251d]">→</span>
                                <input type="text" placeholder="Bullet point text" value={listItem} onChange={e => {
                                  const newPoints = [...block.points];
                                  newPoints[pIndex].pointList[lIndex] = e.target.value;
                                  updateBlock(bIndex, { points: newPoints });
                                }} className="flex-1 px-3 py-1 border border-gray-200 rounded text-sm text-[#172A53] placeholder:text-[#172A53]/70" />
                                <button type="button" onClick={() => {
                                  const newPoints = [...block.points];
                                  newPoints[pIndex].pointList.splice(lIndex, 1);
                                  updateBlock(bIndex, { points: newPoints });
                                }} className="text-gray-400 hover:text-red-500"><Trash2 className="w-3 h-3" /></button>
                              </div>
                            ))}
                            <button type="button" onClick={() => {
                              const newPoints = [...block.points];
                              newPoints[pIndex].pointList.push('');
                              updateBlock(bIndex, { points: newPoints });
                            }} className="text-xs text-[#172A53] font-semibold flex items-center gap-1 hover:underline mt-2">
                              <Plus className="w-3 h-3" /> Add bullet point
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                    <button type="button" onClick={() => updateBlock(bIndex, { points: [...block.points, { pointHeading: '', pointList: [''] }] })} className="text-sm text-[#da251d] font-semibold flex items-center gap-1 hover:underline">
                      <Plus className="w-4 h-4" /> Add Item List
                    </button>
                  </div>
                )}
              </div>
            ))}

            {/* Block Addition Controls */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              <button type="button" onClick={addTextBlock} className="py-4 bg-gray-50 border border-dashed border-gray-300 text-gray-600 font-medium rounded-xl hover:bg-[#172A53] hover:text-white hover:border-[#172A53] transition-colors flex items-center justify-center gap-2">
                <Type className="w-4 h-4" /> Add Text Block
              </button>
              <button type="button" onClick={addCardsBlock} className="py-4 bg-gray-50 border border-dashed border-gray-300 text-gray-600 font-medium rounded-xl hover:bg-[#172A53] hover:text-white hover:border-[#172A53] transition-colors flex items-center justify-center gap-2">
                <LayoutGrid className="w-4 h-4" /> Add Cards Block
              </button>
              <button type="button" onClick={addArrowsBlock} className="py-4 bg-gray-50 border border-dashed border-gray-300 text-gray-600 font-medium rounded-xl hover:bg-[#172A53] hover:text-white hover:border-[#172A53] transition-colors flex items-center justify-center gap-2">
                <List className="w-4 h-4" /> Add Arrow List
              </button>
            </div>
          </div>
          
          <button type="submit" disabled={isPending} className="self-end px-8 py-4 bg-[#da251d] text-white font-bold rounded-xl hover:bg-[#172A53] transition-colors disabled:opacity-70 flex items-center gap-2 shadow-lg">
            <Plus className="w-5 h-5" /> Publish Program
          </button>
        </form>
      </div>

      {/* Existing Programs */}
      <div className="space-y-6">
        {initialPrograms.map((program) => (
          <div key={program.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 relative">
            <button onClick={() => handleDeleteProgram(program.id)} disabled={isPending} className="absolute top-4 right-4 text-gray-400 hover:text-red-500 hover:bg-red-50 p-2 rounded-lg transition-colors">
              <Trash2 className="w-5 h-5" />
            </button>
            
            {program.heroImage && (
              <div className="w-full md:w-48 h-32 rounded-xl overflow-hidden border border-gray-200 flex-shrink-0">
                <img src={program.heroImage} alt="" className="w-full h-full object-cover" />
              </div>
            )}
            <div className="flex-1 pr-12">
              <span className="inline-block px-3 py-1 bg-[#172A53]/10 text-[#172A53] rounded-lg text-xs font-bold uppercase tracking-wider mb-2">
                {program.topic}
              </span>
              <h3 className="text-xl font-bold text-[#172A53] mb-1">{program.heading}</h3>
              {program.subHeading && <p className="text-[#da251d] font-semibold text-sm mb-2">{program.subHeading}</p>}
              <p className="text-sm text-gray-500 line-clamp-2 mb-4">{program.paragraph}</p>
              
              <div className="flex items-center gap-4 text-xs font-medium text-gray-500">
                <span className="bg-gray-100 px-3 py-1 rounded-full">{program.blocks.length} Content Blocks</span>
                <span>Created {new Date(program.createdAt).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        ))}
        {initialPrograms.length === 0 && (
          <div className="text-center py-16 text-gray-500 bg-white rounded-2xl border border-gray-200 border-dashed">
            No programs built yet. Use the builder above to create one!
          </div>
        )}
      </div>
    </div>
  );
}
