import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Trans, useTranslation } from 'react-i18next';
import Seo from './Seo';

export default function QAAccordion() {
  const { t } = useTranslation();
  const posts = t('blog_answer_section.posts', { returnObjects: true }) as {
    question: string
    seo: {
        title: string,
        description : string,
        keywordsKey : string
      }
    reponses: {
      title : string,
      paragraphs : []
    }[]
  }[];
  const [openedBlog, setOpenedBlog] = useState<number>(-1);
  
  function handleOpen(p_index: number): void {
    if (openedBlog === p_index) {
      setOpenedBlog(-1); // Close the blog if it's already opened
    }
    else setOpenedBlog(p_index)
  }

  return (
    <div>
    {posts.map((post, p_index) => ( 
      <div>
        <Seo
          title={post.seo.title}
          description={post.seo.description}
          keywordsKey={post.seo.keywordsKey}
          ogImage=""
        />
        <div key={p_index} className="border border-gray-300  overflow-hidden bg-white shadow mb-4">
          <button
            onClick={() => handleOpen(p_index)}
            className="w-full flex items-center justify-between px-4 py-3 text-left text-gray-800 text-xs font-thin cursor-pointer"
          >
            <span className={`text-center ${openedBlog === p_index ? 'font-bold text-2xl' : 'font-normal text-sm'}`}>{post.question}</span>
            <ChevronDown
              className={`w-5 h-5 transition-transform duration-300 ${openedBlog === p_index ? 'rotate-180' : ''}`}
            />
          </button>
          <div
            className={`px-10 md:px-30 pb-4 text-gray-600 text-xs font-thin transition-all duration-300 ease-in-out ${
              openedBlog === p_index ? 'max-h-100 opacity-100 overflow-scroll' : 'max-h-0 opacity-0 overflow-hidden'
            }`}
          >
            <div className="flex justify-self-center pl-10 w-80 py-10">     
              <img
                    src="/author.jpg"
                    alt="place image"
                    className="h-12 w-12 rounded-full shadow-lg self-baseline-last"
                />       
              <div className='mx-2 flex flex-col justify-center '>
                <h4 className="font-bold text-sm text-black">{t('author')}</h4>
                <h4 className="text-xs font-extralight">{t('job')}</h4>
              </div>           
            </div>
              {post.reponses.map((reponse, r_index) => ( 
                <div key={r_index} className='whitespace-pre-line'>
                  <div><span className={`flex justify-self-center font-bold  text-primary text-lg py-4 whitespace-pre-line`}>{reponse.title}</span></div>
                  {reponse.paragraphs.map((_, pr_index) => ( 
                      <div key={pr_index} className='py-2'>
                        <Trans
                          i18nKey={`blog_answer_section.posts.${p_index}.reponses.${r_index}.paragraphs.${pr_index}`}
                          components={{
                            g: <strong className="font-bold text-accent" />,
                            i: <span className="flex ml-3" />,
                            l: <span className="font-extrabold" />
                          }}
                        />
                      </div>
                  ))}
                </div>
              ))}
          </div>
        </div>
      </div>
    ))}
    </div>
  );
}
